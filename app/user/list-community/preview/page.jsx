"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/utils/formatDate";
import { createCommunity } from "@/app/apis/communityService";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CommunityPreview() {
    const router = useRouter();
    const { token, userInfo } = useSelector((state) => state.auth);
    const [communityData, setCommunityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);

    useEffect(() => {
        // Load form data from localStorage
        try {
            const savedData = localStorage.getItem("communityFormData");
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                console.log("Loaded community data:", parsedData);
                setCommunityData(parsedData);
            } else {
                console.log("No saved data found in localStorage");
            }
        } catch (error) {
            console.error(
                "Error loading community data from localStorage:",
                error
            );
        } finally {
            setLoading(false);
        }
    }, []);

    // Validate and format data before sending to API
    const prepareDataForAPI = (data) => {
        // Ensure arrays are properly formatted
        const preparedData = {
            ...data,
            commTypeCategory: Array.isArray(data.commTypeCategory)
                ? data.commTypeCategory
                : data.commTypeCategory
                ? [data.commTypeCategory]
                : [],
            contentShared: Array.isArray(data.contentShared)
                ? data.contentShared
                : data.contentShared
                ? [data.contentShared]
                : [],
            communityGoal: Array.isArray(data.communityGoal)
                ? data.communityGoal
                : data.communityGoal
                ? [data.communityGoal]
                : [],
        };

        // Remove any undefined or null values
        Object.keys(preparedData).forEach((key) => {
            if (
                preparedData[key] === undefined ||
                preparedData[key] === null ||
                preparedData[key] === ""
            ) {
                delete preparedData[key];
            }
        });

        console.log("Prepared data for API:", preparedData);
        return preparedData;
    };

    const handleSubmit = async () => {
        console.log("Submit button clicked");
        console.log("Community data:", communityData);
        console.log("Token:", token ? "Present" : "Missing");

        if (!communityData) {
            console.log("No community data found");
            toast.error(
                "No community data found. Please complete the form first."
            );
            return;
        }

        if (!token) {
            console.log("No token found");
            toast.error("Authentication required. Please log in.");
            return;
        }

        setFormLoading(true);

        try {
            // Prepare data for API
            const preparedData = prepareDataForAPI(communityData);

            // Add userId from logged-in user
            if (userInfo?.user?.id) {
                preparedData.userId = userInfo.user.id;
                console.log("Added userId to request:", userInfo.user.id);
            } else {
                console.error("No userId found in userInfo");
                toast.error("User not found. Please log in again.");
                setFormLoading(false);
                return;
            }

            console.log("Calling createCommunity with:", preparedData);
            const response = await createCommunity(preparedData, token);

            console.log("createCommunity response:", response);

            // Simplified success check
            if (response && response.success === true) {
                console.log("Community created successfully");
                toast.success(
                    response.message || "Community created successfully!"
                );

                // Optional: Log the created community ID
                if (response.record && response.record.id) {
                    console.log("Created community ID:", response.record.id);
                }

                localStorage.removeItem("communityFormData");
                router.push("/user");
            } else {
                console.log("API returned error:", response);
                // Handle API error response
                const errorMessage =
                    response?.error ||
                    "Error creating community. Please try again.";
                toast.error(errorMessage);

                // Log full error for debugging
                if (response?.fullError) {
                    console.log("Full error details:", response.fullError);
                }

                // If it's an auth error, redirect to login
                if (
                    response?.statusCode === 401 ||
                    response?.statusCode === 403
                ) {
                    console.log("Authentication error, redirecting to login");
                    router.push("/login");
                }
            }
        } catch (error) {
            console.error("Unexpected error in handleSubmit:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            console.log("Setting formLoading to false");
            setFormLoading(false);
        }
    };

    if (loading) {
        return <div>Loading preview data...</div>;
    }

    if (!communityData) {
        return (
            <div className='max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-200'>
                <div className='text-center'>
                    <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                        </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>No Data Found</h2>
                    <p className='text-gray-600 mb-6'>
                        No community data found. Please go back and complete the form.
                    </p>
                    <Link href='/user/list-community'>
                        <button className='primary-button'>
                            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                            </svg>
                            Go Back to Form
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='max-w-5xl mx-auto pb-12'>
            {/* Header */}
            <div className='mb-8'>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Community Preview</h1>
                        <p className='text-gray-600'>Review your community details before listing</p>
                    </div>
                    <Link href='/user/list-community'>
                        <button className='px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
                            </svg>
                            Edit
                        </button>
                    </Link>
                </div>
            </div>

            {/* Hero Banner */}
            <div className='bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-8 mb-8 border border-primary/20'>
                <div className='flex gap-6 items-start'>
                    <div className='min-w-[120px] h-[120px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center'>
                        <span className='text-5xl font-bold text-primary'>
                            {communityData.name?.charAt(0)}
                        </span>
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-3'>{communityData.name}</h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>{communityData.description || "No description provided"}</p>
                        <div className='flex flex-wrap gap-2'>
                            {communityData.communityType && (
                                <span className='inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                                    {communityData.communityType}
                                </span>
                            )}
                            {Array.isArray(communityData.commTypeCategory) && communityData.commTypeCategory.map((cat, idx) => (
                                <span key={idx} className='inline-block px-3 py-1 bg-white border border-primary/30 text-primary rounded-full text-xs font-medium'>
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Basic Information Card */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    Basic Information
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Community Size</div>
                        <div className='font-medium text-gray-900'>{communityData.size || "Not specified"}</div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Location</div>
                        <div className='font-medium text-gray-900'>
                            {communityData.location}{communityData.state ? `, ${communityData.state}` : ""}
                        </div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Established</div>
                        <div className='font-medium text-gray-900'>{communityData.established || "Not specified"}</div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Access Type</div>
                        <div className='font-medium text-gray-900 capitalize'>{communityData.accessType || "Not specified"}</div>
                    </div>
                </div>
            </div>

            {/* Engagement Card */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                    Engagement & Activity
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Communication Platform</div>
                        <div className='font-medium text-gray-900'>{communityData.communicationPlatform || "Not specified"}</div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Engagement Level</div>
                        <div className='font-medium text-gray-900'>{communityData.engagementLevel || "Not specified"}</div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Post Frequency</div>
                        <div className='font-medium text-gray-900'>
                            {communityData.frequency ? `${communityData.frequency} days/week` : "Not specified"}
                        </div>
                    </div>
                    <div>
                        <div className='text-sm text-gray-500 mb-1'>Content Shared</div>
                        <div className='font-medium text-gray-900'>
                            {Array.isArray(communityData.contentShared)
                                ? communityData.contentShared.join(", ")
                                : communityData.contentShared || "Not specified"}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Features Card */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
                    </svg>
                    Additional Features
                </h3>
                <div className='space-y-4'>
                    {communityData.communityInterest && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Key Topics & Interests</div>
                            <div className='font-medium text-gray-900'>{communityData.communityInterest}</div>
                        </div>
                    )}
                    {communityData.communityGoal && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Types of Interactions</div>
                            <div className='font-medium text-gray-900'>
                                {Array.isArray(communityData.communityGoal)
                                    ? communityData.communityGoal.join(", ")
                                    : communityData.communityGoal}
                            </div>
                        </div>
                    )}
                    {communityData.usp && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Unique Selling Points</div>
                            <div className='font-medium text-gray-900'>{communityData.usp}</div>
                        </div>
                    )}
                    {communityData.recognition && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Special Recognition/Awards</div>
                            <div className='font-medium text-gray-900'>{communityData.recognition}</div>
                        </div>
                    )}
                    {communityData.additionalService && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Additional Services</div>
                            <div className='font-medium text-gray-900'>{communityData.additionalService}</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Information Card */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    Contact Information
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {communityData.email && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Email</div>
                            <div className='font-medium text-gray-900'>{communityData.email}</div>
                        </div>
                    )}
                    {communityData.phone && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Phone</div>
                            <div className='font-medium text-gray-900'>{communityData.phone}</div>
                        </div>
                    )}
                    {communityData.website && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Website</div>
                            <a href={communityData.website} target='_blank' rel='noopener noreferrer' className='font-medium text-primary hover:underline'>
                                {communityData.website}
                            </a>
                        </div>
                    )}
                    {communityData.whatsapp && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>WhatsApp</div>
                            <div className='font-medium text-gray-900'>{communityData.whatsapp}</div>
                        </div>
                    )}
                    {communityData.telegram && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Telegram</div>
                            <div className='font-medium text-gray-900'>{communityData.telegram}</div>
                        </div>
                    )}
                    {communityData.twitter && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>Twitter</div>
                            <div className='font-medium text-gray-900'>{communityData.twitter}</div>
                        </div>
                    )}
                    {communityData.linkedin && (
                        <div>
                            <div className='text-sm text-gray-500 mb-1'>LinkedIn</div>
                            <div className='font-medium text-gray-900'>{communityData.linkedin}</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 justify-center'>
                <Link href='/user/list-community'>
                    <button className='px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium'>
                        Go Back & Edit
                    </button>
                </Link>
                <button
                    onClick={handleSubmit}
                    disabled={formLoading}
                    className='px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2'
                >
                    {formLoading ? (
                        <>
                            <svg className='animate-spin h-5 w-5' fill='none' viewBox='0 0 24 24'>
                                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                            </svg>
                            Creating Community...
                        </>
                    ) : (
                        <>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                            List Community
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
