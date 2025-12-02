"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getStripePlans } from "../apis/stripe";
import UpgradeModalPay from "./upgradePlanModalPay";

export default function PricingInner() {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [loading, setLoading] = useState(false);
    const [allPlans, setAllPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [payOpen, setPayOpen] = useState(false);
    
    // Get user info from Redux store
    const userInfo = useSelector(state => state.auth.userInfo);
    const userId = userInfo?.id || userInfo?.userId || userInfo?.user_id;

    // Currency options for the dropdown
    const currencyOptions = [
        { code: 'USD', name: 'United States Dollar ($)', symbol: '$' },
        { code: 'EUR', name: 'Euro (€)', symbol: '€' },
        { code: 'GBP', name: 'British Pound (£)', symbol: '£' },
        { code: 'CAD', name: 'Canadian Dollar (C$)', symbol: 'C$' },
        { code: 'AUD', name: 'Australian Dollar (A$)', symbol: 'A$' },
        { code: 'NGN', name: 'Nigerian Naira (₦)', symbol: '₦' },
        { code: 'INR', name: 'Indian Rupee (₹)', symbol: '₹' },
        { code: 'ZMW', name: 'Zambian Kwacha (ZK)', symbol: 'ZK' }
    ];

    // The backend already provides organized plans, no processing needed
    const processBackendPlans = (plans) => {
        // Plans from backend are already in the correct format:
        // [{currencyId, currency, plans: {monthly: {...}, quarterly: {...}, annually: {...}}}]
        // Just add active: true to each plan
        return plans.map(currencyPlan => ({
            ...currencyPlan,
            plans: {
                monthly: currencyPlan.plans.monthly ? { ...currencyPlan.plans.monthly, active: true } : null,
                quarterly: currencyPlan.plans.quarterly ? { ...currencyPlan.plans.quarterly, active: true } : null,
                annually: currencyPlan.plans.annually ? { ...currencyPlan.plans.annually, active: true } : null
            }
        }));
    };

    // Fetch all subscription plans on component mount
    useEffect(() => {
        const fetchAllPlans = async () => {
            try {
                setLoading(true);
                console.log('🔍 Fetching pricing plans...');

                // Fetch plans from backend /pricing endpoint
                const plansResponse = await getStripePlans();

                console.log('📦 Pricing plans response:', plansResponse);

                if (plansResponse.data?.plans?.length > 0) {
                    // Process the backend plans
                    const processedPlans = processBackendPlans(plansResponse.data.plans);

                    console.log('✅ Processed plans:', processedPlans);

                    setAllPlans(processedPlans);
                } else {
                    console.error('❌ No plans found in response');
                }
            } catch (error) {
                console.error('💥 Error fetching subscription plans:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPlans();
    }, []);

    // Handle currency change
    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        setSelectedCurrency(newCurrency);
        
        console.log(`🔄 Changing currency to: ${newCurrency}`);
        
        // Currency change updates the selectedCurrency, which triggers re-render with new plans
        console.log(`💱 Changed currency to: ${newCurrency}`);
    };

    // Get currency symbol
    const getCurrencySymbol = (currencyCode) => {
        const currency = currencyOptions.find(option => option.code === currencyCode);
        return currency ? currency.symbol : currencyCode;
    };

    // Format plan name based on interval
    const getPlanName = (planType) => {
        switch (planType) {
            case 'monthly':
                return 'Essential plan';
            case 'annually':
                return 'Premier plan';
            case 'quarterly':
                return 'Pro plan';
            default:
                return 'Plan';
        }
    };

    // Format subscription period
    const getSubscriptionPeriod = (planType, intervalCount) => {
        switch (planType) {
            case 'monthly':
                return 'Monthly subscription';
            case 'annually':
                return 'Yearly subscription';
            case 'quarterly':
                return `${intervalCount}-months subscription`;
            default:
                return 'Subscription';
        }
    };

    // Get plan subtitle
    const getPlanSubtitle = (planType) => {
        switch (planType) {
            case 'monthly':
                return 'Perfect for users needing flexibility or those testing the platform\'s capabilities';
            case 'annually':
                return 'Designed for committed users, this plan offers substantial savings for a medium-term strategy.';
            case 'quarterly':
                return 'Designed for committed users, offering significant savings over 6 months';
            default:
                return '';
        }
    };

    // Get plan features
    const getPlanFeatures = (planType) => {
        const baseFeatures = [
            'Unlimited access to the full database.',
            'Full database access with intelligent matchmaking and insights',
            'Vetted connections',
            'Quality ratings',
            'Advanced search'
        ];

        if (planType === 'annually') {
            return ['Save 15% per month', ...baseFeatures];
        } else if (planType === 'quarterly') {
            return ['Save 30% per month', ...baseFeatures];
        }
        return baseFeatures;
    };

    // Handle plan selection
    const handlePlanClick = (planType, planDetails, currencyPlan) => {
        if (!planDetails.active) {
            console.error('🚨 Plan is not active!');
            return;
        }

        const selectedPlanData = {
            name: getPlanName(planType),
            period: getSubscriptionPeriod(planType, planDetails.intervalCount),
            amount: planDetails.amount,
            currency: currencyPlan.currency,
            currencySymbol: getCurrencySymbol(currencyPlan.currency),
            interval: planDetails.interval,
            intervalCount: planDetails.intervalCount,
            currencyId: currencyPlan.currencyId,
            priceId: planDetails.priceId,
            planType: planType,
            userEmail: userInfo?.email,
            userName: userInfo?.name || `${userInfo?.firstName || ''} ${userInfo?.lastName || ''}`.trim(),
        };
        
        console.log('🎪 Selected Plan Data:', selectedPlanData);
        setSelectedPlan(selectedPlanData);
        setPayOpen(true);
    };

    // Success and error handlers for payment
    const handlePaymentSuccess = (paymentData) => {
        console.log("🎉 Payment successful:", paymentData);
        setPayOpen(false);
        // Optionally reload or redirect
        if (paymentData.hasNewToken) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    };

    const handlePaymentError = (errorMessage) => {
        console.error("❌ Payment error:", errorMessage);
        setPayOpen(false);
    };

    // Find the currency plan for the selected currency
    const currencyPlan = allPlans.find(plan => plan.currency === selectedCurrency);
    const plans = currencyPlan?.plans || {};

    // Define plan order for display
    const planOrder = ['monthly', 'annually', 'quarterly'];

    return (
        <>
            <select
                name="currency"
                id="currency"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                disabled={loading}
                className="border border-[#e5e5e5] rounded-3xl w-[205px] h-12 mx-auto mb-10 flex items-center justify-center px-5 md:mb-6"
            >
                {currencyOptions.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                        {currency.name}
                    </option>
                ))}
            </select>

            {loading ? (
                <div className="p-10 text-center">
                    Loading subscription plans...
                </div>
            ) : (
                <div className="flex flex-row gap-6 max-md:flex-col">
                    {planOrder.map((planType) => {
                        const planDetails = plans[planType];
                        if (!planDetails) return null;

                        const isPopular = planType === 'annually';
                        const features = getPlanFeatures(planType);

                        return (
                            <div
                                key={planType}
                                className={`flex-1 p-8 max-w-[350px] rounded-2xl border border-[#E5E5E5] md:py-6 md:px-4 ${isPopular ? 'bg-[#13100A] text-white' : ''} ${planDetails.active ? 'opacity-100' : 'opacity-60'}`}
                            >
                                <div className="font-bold mb-6 flex items-center justify-between md:text-md md:mb-3">
                                    {isPopular ? (
                                        <>
                                            <div>{getPlanName(planType)}</div>
                                            <Image
                                                alt="Popular"
                                                width={76}
                                                height={24}
                                                src={"/assets/icons/cheapest.svg"}
                                            />
                                        </>
                                    ) : (
                                        <div>{getPlanName(planType)}</div>
                                    )}
                                </div>
                                <div className="flex gap-4 items-center mb-6 md:gap-3 md:mb-3 mt-5">
                                    <div className="font-semibold md:text-5xl">
                                        {getCurrencySymbol(selectedCurrency)}
                                        {planDetails.amount.toLocaleString()}
                                    </div>
                                    <div className="font-normal md:text-md">{getSubscriptionPeriod(planType, planDetails.intervalCount)}</div>
                                </div>

                                <div className="leading-[140%] mb-8 md:text-md md:mb-4">
                                    {getPlanSubtitle(planType)}
                                </div>

                                <button
                                    onClick={() => planDetails.active && currencyPlan && handlePlanClick(planType, planDetails, currencyPlan)}
                                    disabled={!planDetails.active}
                                    className={`primary-button mb-8 md:w-full md:h-12 md:text-xl md:mb-4 mt-4 ${planDetails.active ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'}`}
                                >
                                    Choose plan
                                </button>

                                <div className="mb-4 text-[#8D8D8D] md:text-md md:mb-3">Features</div>

                                <div className="grid grid-cols-[24px_auto] gap-x-4 gap-y-6 md:gap-x-2 md:gap-y-4 md:text-md mt-4">
                                    {features.map((feature, index) => (
                                        <React.Fragment key={index}>
                                            <Image
                                                alt=""
                                                width={24}
                                                height={24}
                                                src={"/assets/icons/tick.svg"}
                                            />
                                            <div>{feature}</div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <UpgradeModalPay 
                open={payOpen} 
                setOpen={setPayOpen} 
                planData={selectedPlan}
                userId={userId}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
            />
        </>
    )
}