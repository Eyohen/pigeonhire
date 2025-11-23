"use client";

import Image from "next/image";
import { useState } from "react";
import CommunityRatings from "./communityRatings";
import ConnectorCard from "./connectorCard";
import ContactInfoModal from "./contactInfoModal";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    getConnector,
    getConnectors,
    favoriteConnector,
    favoriteConnectorGeneric,
    connectorFavoriteChecker,
    removeFavoriteConnector,
} from "@/app/apis/connector";
import { createLead } from "../apis/lead";
import { useSelector } from "react-redux";
import ConnectorRatings from "./connectorRatings";

export default function ConnectorDetails() {
    const { userInfo, token } = useSelector((state) => state.auth);
    console.log("userInfo", userInfo);

    const subscribed = userInfo?.user?.subscribed || false;
    const [save, setSave] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [connectors, setConnectors] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const { id } = useParams();
    const [connector, setConnector] = useState(null);

    const handleGetConnector = async () => {
        try {
            const response = await getConnector(id);
            console.log("getConnector", response);
            setConnector(response?.data);
        } catch (error) {
            console.log("Error creating community:", error);
            toast.error(
                error?.response?.data?.msg ||
                    "Error getting connector. Please try again."
            );
        }
    };

    const handleGetCommunities = async () => {
        setLoading(true);
        try {
            const response2 = await getConnectors();
            console.log("getConnectors", response2);
            setConnectors(response2?.data?.connectors);
        } catch (error) {
            console.log("Error fetching communities:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFavoriteConnector = async () => {
        // Check if user is subscribed
        if (!subscribed) {
            toast.error("You need to subscribe to save connectors. Please upgrade your plan.");
            return;
        }

        try {
            console.log("Step 1: Adding to favorites...");
            const favoriteResponse = await favoriteConnector(
                userInfo?.user?.id,
                id,
                token
            );
            console.log("Favorite added successfully:", favoriteResponse);

            console.log("Step 2: Creating lead...");
            const leadData = {
                userId: userInfo?.user?.id,
                connectorId: id,
                leadType: "connector",
                notes: `User saved ${connector?.firstName} ${connector?.lastName} as favorite connector`,
                followUpDate: new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                ).toISOString(),
            };

            const leadResponse = await createLead(leadData, token);
            console.log("Lead created successfully:", leadResponse);

            toast.success("Connector saved successfully!");
            handleCheckConnectorFavorite();
        } catch (error) {
            console.error("Detailed error:", error);
            console.error("Error response:", error.response?.data);

            toast.error(
                error?.response?.data?.message ||
                    error?.response?.data?.msg ||
                    "Unable to add connector to favorites. Please try again."
            );
        }
    };

    const handleRemoveFavoriteConnector = async () => {
        try {
            const response = await removeFavoriteConnector(
                userInfo?.user?.id,
                id,
                token
            );
            console.log("removeFavoriteConnector", response);
            toast.success(
                response?.data?.msg || "Connector removed from favorites!"
            );
            handleCheckConnectorFavorite();
        } catch (error) {
            console.log("Error removing connector from favorites:", error);
            toast.error(
                error?.response?.data?.msg ||
                    "Unable to remove connector from favorites. Please try again."
            );
        }
    };

    const handleCheckConnectorFavorite = async () => {
        try {
            const response = await connectorFavoriteChecker(
                userInfo?.user?.id,
                id,
                token
            );
            console.log("connectorFavoriteChecker", response);
            setIsFavorite(response?.data?.isFavorite);
        } catch (error) {
            console.log("Error checking connector favorite status:", error);
        }
    };

    useEffect(() => {
        handleGetConnector();
        handleGetCommunities();
        handleCheckConnectorFavorite();
    }, []);

    return (
        <>
            <div className='border border-border rounded-3xl p-8 mb-8 shadow-sm'>
                <div className='flex gap-6'>
                    <div className='min-w-[100px] h-[100px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center'>
                        <span className='text-4xl font-bold text-primary'>
                            {connector?.firstName?.charAt(0)}{connector?.lastName?.charAt(0)}
                        </span>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-4 mb-4'>
                            <h1 className='text-2xl font-bold text-gray-900'>
                                {connector?.firstName} {connector?.lastName}
                            </h1>
                            {connector?.verified && (
                                <Image
                                    alt='Verified'
                                    width={60}
                                    height={24}
                                    src={"/assets/icons/verified.svg"}
                                />
                            )}
                            {connector?.recordType === "owner record" ? (
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
                                    owner record
                                </span>
                            ) : connector?.recordType === "public record" ? (
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap">
                                    public record
                                </span>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <span className='inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                                {connector?.role}
                            </span>
                        </div>

                        <p className='text-gray-700 leading-relaxed mb-6 max-w-[70ch]'>
                            {connector?.description}
                        </p>

                        <div className='grid grid-cols-3 gap-4 text-sm'>
                            <div>
                                <div className='text-gray-500 mb-1'>Community</div>
                                <div className='font-medium'>{connector?.communityName}</div>
                            </div>
                            <div>
                                <div className='text-gray-500 mb-1'>Location</div>
                                <div className='font-medium'>{connector?.community?.location || 'Global'}</div>
                            </div>
                            <div>
                                <div className='text-gray-500 mb-1'>Connection Type</div>
                                <div className='font-medium'>{connector?.connectionType}</div>
                            </div>
                        </div>

                        {subscribed && (
                            <button
                                className='primary-button mt-6 max-w-fit px-8'
                                onClick={() => setOpen(true)}
                            >
                                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                                Contact
                            </button>
                        )}
                    </div>

                    {/* Save connector as favorite */}
                    <div
                        className={`flex flex-col items-center gap-1 transition-all ${
                            !subscribed ? 'text-gray-400 cursor-not-allowed opacity-60' :
                            isFavorite ? 'text-secondary cursor-pointer' : 'text-gray-500 hover:text-secondary cursor-pointer'
                        }`}
                        onClick={
                            !subscribed ? () => toast.error("You need to subscribe to save connectors. Please upgrade your plan.") :
                            isFavorite
                                ? handleRemoveFavoriteConnector
                                : handleFavoriteConnector
                        }
                        title={!subscribed ? "Subscribe to save connectors" : ""}
                    >
                        <div className={`p-2 rounded-lg transition-colors ${!subscribed ? '' : 'hover:bg-gray-100'}`}>
                            {!subscribed ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            ) : (
                                <Image
                                    src={
                                        isFavorite
                                            ? "/assets/icons/saveFilled.svg"
                                            : "/assets/icons/save.svg"
                                    }
                                    width={28}
                                    height={28}
                                    alt='Save'
                                />
                            )}
                        </div>
                        <span className='text-xs font-medium'>
                            {!subscribed ? 'Subscribe' : isFavorite ? 'Saved' : 'Save'}
                        </span>
                    </div>
                </div>
                <div className='w-full h-px bg-gray-200 my-8'></div>

                <div>
                    <h2 className='text-xl font-semibold mb-6 flex items-center gap-2'>
                        <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        Connector Details
                        {!subscribed && (
                            <span className='text-sm text-gray-500 font-normal'>(Subscribe to view)</span>
                        )}
                    </h2>

                    {subscribed && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-4'>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Platform</div>
                                    <div className='font-medium'>{connector?.connectionPlatform || 'Not specified'}</div>
                                </div>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Access</div>
                                    <div className='font-medium'>{connector?.accessRequirement || 'Contact for details'}</div>
                                </div>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Website</div>
                                    {connector?.website && (
                                        <a
                                            href={connector.website}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-primary hover:underline font-medium'
                                        >
                                            Visit Website →
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className='text-sm text-gray-500 mb-3'>Social Links</div>
                                <div className='flex flex-wrap gap-2'>
                                {connector?.facebook && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://facebook.com/${
                                                    connector?.facebook.startsWith(
                                                        "@"
                                                    )
                                                        ? connector?.facebook.substring(
                                                              1
                                                          )
                                                        : connector?.facebook
                                                }`
                                            )
                                        }
                                    >
                                        Facebook
                                    </button>
                                )}
                                {connector?.instagram && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://instagram.com/${
                                                    connector?.instagram.startsWith(
                                                        "@"
                                                    )
                                                        ? connector?.instagram.substring(
                                                              1
                                                          )
                                                        : connector?.instagram
                                                }`
                                            )
                                        }
                                    >
                                        Instagram
                                    </button>
                                )}
                                {connector?.twitter && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://twitter.com/${
                                                    connector?.twitter.startsWith(
                                                        "@"
                                                    )
                                                        ? connector?.twitter.substring(
                                                              1
                                                          )
                                                        : connector?.twitter
                                                }`
                                            )
                                        }
                                    >
                                        Twitter
                                    </button>
                                )}
                                {connector?.telegram && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://t.me/${
                                                    connector?.telegram.startsWith(
                                                        "@"
                                                    )
                                                        ? connector?.telegram.substring(
                                                              1
                                                          )
                                                        : connector?.telegram
                                                }`
                                            )
                                        }
                                    >
                                        Telegram
                                    </button>
                                )}
                                {connector?.linkedIn && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://linkedin.com/in/${
                                                    connector?.linkedIn.startsWith(
                                                        "@"
                                                    )
                                                        ? connector?.linkedIn.substring(
                                                              1
                                                          )
                                                        : connector?.linkedIn
                                                }`
                                            )
                                        }
                                    >
                                        LinkedIn
                                    </button>
                                )}
                            </div>
                            </div>
                            {connector?.community?.recognition && (
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Special Achievements</div>
                                    <div className='font-medium'>{connector?.community?.recognition}</div>
                                </div>
                            )}
                            {connector?.community?.additionalService && (
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Additional Services</div>
                                    <div className='font-medium'>{connector?.community?.additionalService}</div>
                                </div>
                            )}
                        </div>
                    )}

                    {!subscribed && (
                        <div className='mt-6 flex flex-col items-center justify-center gap-3 py-8'>
                            <button
                                className='px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg'
                                onClick={() => setSubscribed(true)}
                            >
                                Subscribe to view full details
                            </button>

                            <p className='text-sm text-gray-600'>
                                Subscribe to connect with this connector
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {subscribed && (
                <ConnectorRatings
                    connectorId={connector?.id}
                    averageRating={connector?.rating}
                />
            )}
            {!subscribed && connectors?.length > 0 && (
                <div>
                    <h2 className='text-xl font-semibold mb-6 flex items-center gap-2'>
                        <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                        </svg>
                        Related Connectors
                    </h2>

                    <div className='space-y-4'>
                        {connectors?.map((connector) => (
                            <ConnectorCard
                                type='connector'
                                verified={true}
                                title={connector?.communityName}
                                subtitle={connector?.description}
                                members={"500"}
                                id={connector?.id}
                                key={connector?.id}
                                date={connector?.createdAt}
                            />
                        ))}
                    </div>
                </div>
            )}

            <ContactInfoModal open={open} setOpen={setOpen} community={connector} />
        </>
    );
}
