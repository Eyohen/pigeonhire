"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

// Safely initialize Stripe only when a publishable key exists
const hasStripeKey = !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise =
    typeof window !== "undefined" && hasStripeKey
        ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        : null;

// Cookie utility function
const getCookie = (name) => {
    if (typeof window === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return decodeURIComponent(parts.pop().split(";").shift());
    return null;
};

// Add this new function after the getCookie function
const createSubscriptionRecord = async (subscriptionData) => {
    const token = getCookie("auth_token");

    const response = await fetch("/api/subscriptions/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(subscriptionData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            errorData.message || "Failed to create subscription record"
        );
    }

    return response.json();
};

export default function UpgradeModalPay({
    open,
    setOpen,
    planData,
    onSuccess,
    onError,
}) {
    const [showStripeForm, setShowStripeForm] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [subscriptionId, setSubscriptionId] = useState("");
    const [isInitializing, setIsInitializing] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Get values from cookies
    const token = isClient ? getCookie("auth_token") : null;
    const userId = isClient ? getCookie("user_id") : null;
    const userEmail = isClient ? getCookie("user_email") : null;
    const userName = isClient ? getCookie("user_name") : null;

    // Updated handleSuccess function - simplified for Option 1
    const handleSuccess = async (paymentIntentId, subscriptionId) => {
        setPaymentStatus("success");
        setErrorMessage("");

        // Prepare subscription data for backend
        const subscriptionData = {
            subscriptionId: subscriptionId,
            paymentIntentId: paymentIntentId,
            planType: planData.name?.toLowerCase().includes("essential")
                ? "essential"
                : planData.name?.toLowerCase().includes("premier")
                ? "premier"
                : "pro",
            amount: planData.amount,
            currency: planData.currency,
            priceId: planData.priceId,
            userId: userId,
            userEmail: userEmail,
            userName: userName || planData.userName || "",
            status: "active",
            createdAt: new Date().toISOString(),
        };

        try {
            // Send subscription data to backend
            console.log(
                "📤 Sending subscription data to backend:",
                subscriptionData
            );
            const backendResponse = await createSubscriptionRecord(
                subscriptionData
            );
            console.log(
                "✅ Backend subscription record created:",
                backendResponse
            );

            // Check if backend returned a new auth token
            if (backendResponse.newAuthToken) {
                console.log("🔄 Updating auth token with subscription info");

                // Update the cookie with new token that includes subscription status
                document.cookie = `auth_token=${
                    backendResponse.newAuthToken
                }; path=/; max-age=${
                    30 * 24 * 60 * 60
                }; secure; samesite=strict`;

                console.log(
                    "✅ Auth token updated successfully - user now has subscription access"
                );
            }

            // Call parent success handler if provided
            if (onSuccess) {
                onSuccess({
                    subscriptionId: subscriptionId || paymentIntentId,
                    backendRecordId: backendResponse.id,
                    hasNewToken: !!backendResponse.newAuthToken,
                });
            }

            setTimeout(() => {
                setOpen(false);
                resetModal();
                // Reload to reflect new subscription status throughout the app
                window.location.reload();
            }, 3000);
        } catch (backendError) {
            console.error(
                "❌ Failed to create backend subscription record:",
                backendError
            );

            setErrorMessage(
                `Payment successful, but failed to save subscription record: ${backendError.message}`
            );

            if (onSuccess) {
                onSuccess({
                    subscriptionId: subscriptionId || paymentIntentId,
                    backendError: backendError.message,
                });
            }

            setTimeout(() => {
                setOpen(false);
                resetModal();
                window.location.reload();
            }, 3000);
        }
    };

    const handleError = (msg) => {
        setPaymentStatus("error");
        setErrorMessage(msg);

        // Call parent error handler if provided
        if (onError) {
            onError(msg);
        }
    };

    const resetModal = () => {
        setShowStripeForm(false);
        setPaymentStatus("");
        setErrorMessage("");
        setClientSecret("");
        setSubscriptionId("");
        setIsInitializing(false);
    };

    const validatePaymentData = () => {
        const errors = [];

        if (!token) errors.push("Authentication token missing");
        if (!userEmail) errors.push("User email missing");
        if (!planData?.priceId) errors.push("Price ID missing");
        if (!userId) errors.push("User ID missing");

        return errors;
    };

    const initializePayment = async () => {
        if (!isClient) return;

        const validationErrors = validatePaymentData();
        if (validationErrors.length > 0) {
            setErrorMessage(
                `Missing required information: ${validationErrors.join(", ")}`
            );
            return;
        }

        setIsInitializing(true);
        setErrorMessage("");
console.log("winning plan data", planData);

        try {
            const paymentData = {
                planType: planData.name?.toLowerCase().includes("essential")
                    ? "essential"
                    : planData.name?.toLowerCase().includes("premier")
                    ? "premier"
                    : "pro",
                amount: planData.amount,
                currency: planData.currency,
                priceId: planData.priceId,
                userId,
                userEmail,
                userName: userName || planData.userName || "",
            };

            console.log("🚀 Initializing payment with data:", paymentData);

            const response = await fetch("/api/create-subscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(paymentData),
            });

            console.log("📡 Response status:", response.status);
            console.log("📡 Response ok:", response.ok);

            // Get the response text first to see what we're actually getting
            const responseText = await response.text();
            console.log("📝 Raw response text:", responseText);

            let data;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("❌ JSON parse error:", parseError);
                throw new Error(
                    `Server returned invalid JSON: ${responseText}`
                );
            }

            console.log("📦 Parsed response data:", data);

            if (!response.ok) {
                console.error("❌ HTTP Error:", response.status, data);
                throw new Error(
                    data.error || `HTTP error! status: ${response.status}`
                );
            }

            // Check the structure of the response
            console.log("🔍 Checking response structure:");
            console.log("- clientSecret exists:", !!data.clientSecret);
            console.log("- clientSecret value:", data.clientSecret);
            console.log("- subscriptionId exists:", !!data.subscriptionId);
            console.log("- subscriptionId value:", data.subscriptionId);

            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
                setSubscriptionId(data.subscriptionId || "");
                setShowStripeForm(true);
            } else {
                // Log all available keys in the response
                console.error(
                    "❌ No clientSecret in response. Available keys:",
                    Object.keys(data)
                );
                throw new Error(
                    data.error || "No client secret received from server"
                );
            }
        } catch (error) {
            console.error("💥 Payment initialization error:", error);
            console.error("💥 Error stack:", error.stack);
            handleError(error.message || "Failed to initialize payment");
        } finally {
            setIsInitializing(false);
        }
    };

    useEffect(() => {
        if (!open) {
            resetModal();
        }
    }, [open]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    if (!isClient) return null;

    return (
        open && (
            <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5 overflow-y-auto"
            >
                <div
                    className="bg-white rounded-xl w-full max-w-[500px] max-h-[90vh] flex flex-col shadow-xl m-auto"
                >
                    <div
                        className="px-6 pt-6 pb-0 flex justify-between items-center shrink-0 border-b border-[#e5e7eb] pb-4"
                    >
                        <div className="text-xl font-semibold">
                            Upgrade plan
                        </div>
                        <Image
                            alt='Close'
                            width={32}
                            height={32}
                            src={"/assets/icons/close.svg"}
                            className='pointer'
                            onClick={() => setOpen(false)}
                        />
                    </div>

                        <div
                        className="p-6 overflow-y-auto flex-grow flex flex-col gap-6"
                    >
                        <div
                            className="border border-[#e5e7eb] rounded-lg p-5"
                        >
                            <div
                                className="flex justify-between items-center mb-4"
                            >
                                <div
                                    className="text-lg font-semibold"
                                >
                                    {planData?.name || "Plan"}
                                </div>
                                <div
                                    className="text-lg font-bold text-emerald-600"
                                >
                                    {planData?.currencySymbol || "$"}
                                    {planData?.amount || "0"} /{" "}
                                    {planData?.interval || "month"}
                                </div>
                            </div>
                            <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    Unlimited access to the full database.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    Full database access with intelligent
                                    matchmaking and insights.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    Vetted connections.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    Quality ratings.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    Advanced search.
                                </li>
                            </ul>
                        </div>

                        {paymentStatus === "success" && (
                            <div className="bg-emerald-50 border border-emerald-500 rounded-lg p-4 flex items-center gap-3">
                                <span className="text-xl">✅</span>
                                <div>
                                    <div className="font-semibold text-emerald-900">
                                        Payment Successful!
                                    </div>
                                    <div className="text-emerald-700 text-sm">
                                        Your subscription has been activated.
                                        Redirecting...
                                    </div>
                                    {subscriptionId && (
                                        <div className="text-emerald-700 text-xs mt-1">
                                            Subscription ID: {subscriptionId}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {paymentStatus === "error" && errorMessage && (
                            <div className="bg-red-50 border border-red-400 rounded-lg p-4 text-red-900">
                                <div className="font-semibold">
                                    ❌ Payment Failed
                                </div>
                                <div className="text-sm mt-1">
                                    {errorMessage}
                                </div>
                            </div>
                        )}

                        {!paymentStatus && errorMessage && (
                            <div className="bg-amber-50 border border-amber-500 rounded-lg p-4 text-amber-900">
                                <div className="font-semibold">
                                    ⚠️ Error
                                </div>
                                <div className="text-sm mt-1">
                                    {errorMessage}
                                </div>
                            </div>
                        )}

                        {isInitializing && (
                            <div className="bg-blue-50 border border-blue-500 rounded-lg p-4 text-blue-900 text-center">
                                <div className="font-semibold">
                                    🔄 Initializing subscription payment...
                                </div>
                                <div className="text-sm mt-1">
                                    Please wait while we prepare your
                                    subscription.
                                </div>
                            </div>
                        )}

                        {!showStripeForm &&
                            paymentStatus === "" &&
                            !isInitializing && (
                                <div className="flex gap-3 flex-col">
                                    <button
                                        disabled={!planData?.priceId}
                                        className={`title-12 font-semibold w-full h-10 rounded-lg border-none flex items-center justify-center gap-2 text-white ${
                                            !planData?.priceId
                                                ? "bg-[#e5e7eb] cursor-not-allowed"
                                                : "bg-[#07969E] cursor-pointer"
                                        }`}
                                    >
                                        <Image
                                            alt='Paystack'
                                            width={16}
                                            height={16}
                                            src={"/assets/icons/paystack.svg"}
                                            className='pointer'
                                        />
                                        Paystack
                                    </button>
                                    <button
                                        onClick={initializePayment}
                                        disabled={
                                            isInitializing || !planData?.priceId || !hasStripeKey
                                        }
                                        className={`title-12 font-semibold w-full h-10 rounded-lg border-none text-white ${
                                            isInitializing ||
                                            !planData?.priceId ||
                                            !hasStripeKey
                                                ? "bg-[#e5e7eb] cursor-not-allowed"
                                                : "bg-[#635BFF] cursor-pointer"
                                        }`}
                                    >
                                        {isInitializing
                                            ? "Initializing..."
                                            : "Stripe"}
                                        {!planData?.priceId &&
                                            " (Price ID Missing)"}
                                        {!hasStripeKey &&
                                            " (Publishable key missing)"}
                                    </button>
                                </div>
                            )}

                        {showStripeForm &&
                            paymentStatus === "" &&
                            clientSecret &&
                            hasStripeKey &&
                            stripePromise && (
                                <Elements
                                    stripe={stripePromise}
                                    options={{
                                        clientSecret,
                                        appearance: {
                                            theme: "stripe",
                                        },
                                    }}
                                >
                                    <CheckoutForm
                                        planData={planData}
                                        onSuccess={(paymentIntentId) =>
                                            handleSuccess(
                                                paymentIntentId,
                                                subscriptionId
                                            )
                                        }
                                        onError={handleError}
                                        setShowStripeForm={setShowStripeForm}
                                        clientSecret={clientSecret}
                                    />
                                </Elements>
                            )}
                        {showStripeForm && clientSecret && !hasStripeKey && (
                            <div className="bg-orange-50 border border-orange-400 rounded-lg p-4 text-orange-800">
                                Stripe publishable key is missing. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and reload.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}

const CheckoutForm = ({
    planData,
    onSuccess,
    onError,
    setShowStripeForm,
    clientSecret,
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);
        setErrorMessage("");

        try {
            if (!stripe || !elements || !clientSecret) {
                throw new Error(
                    "Payment system is not ready. Please try again."
                );
            }

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                redirect: "if_required",
                confirmParams: {
                    return_url:
                        window.location.origin + "/subscription-success",
                },
            });

            if (error) {
                console.error("Payment confirmation error:", error);
                throw new Error(error.message);
            } else if (paymentIntent) {
                console.log("Payment intent status:", paymentIntent.status);

                if (paymentIntent.status === "succeeded") {
                    // Extract subscription ID from payment intent metadata
                    const subscriptionId =
                        paymentIntent.metadata?.subscription_id;
                    console.log(
                        "✅ Payment succeeded! Subscription ID:",
                        subscriptionId
                    );
                    onSuccess && onSuccess(paymentIntent.id, subscriptionId);
                } else if (paymentIntent.status === "processing") {
                    const subscriptionId =
                        paymentIntent.metadata?.subscription_id;
                    console.log(
                        "🔄 Payment processing! Subscription ID:",
                        subscriptionId
                    );
                    onSuccess && onSuccess(paymentIntent.id, subscriptionId);
                } else {
                    throw new Error(
                        `Payment status: ${paymentIntent.status}. Please contact support.`
                    );
                }
            } else {
                throw new Error("Payment was not completed. Please try again.");
            }
        } catch (error) {
            console.error("Payment processing error:", error);
            setErrorMessage(error.message);
            onError && onError(error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <PaymentElement />
            <button
                type='submit'
                disabled={!stripe || isProcessing}
                className={`py-3 px-6 text-white border-none rounded-lg text-base font-semibold ${
                    !stripe || isProcessing
                        ? "bg-[#e5e7eb] cursor-not-allowed"
                        : "bg-[#6366f1] cursor-pointer"
                }`}
            >
                {isProcessing
                    ? "Processing payment..."
                    : `Subscribe for ${planData?.currencySymbol || "$"}${
                          planData?.amount || "0"
                      }`}
            </button>
            {errorMessage && (
                <div className="bg-red-50 border border-red-400 rounded-lg p-3 text-red-900 text-sm">
                    ❌ {errorMessage}
                </div>
            )}
        </form>
    );
};
