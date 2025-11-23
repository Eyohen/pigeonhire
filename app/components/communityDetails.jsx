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
    communityFavoriteChecker,
    favoriteCommunity,
    getCommunities,
    getCommunity,
    removeFavoriteCommunity,
} from "../apis/community";

import { createLead } from "../apis/lead";
import { useSelector } from "react-redux";

export default function CommunityDetails() {
    const { userInfo, token } = useSelector((state) => state.auth);
    console.log("userInfo", userInfo);

    const subscribed = userInfo?.user?.subscribed || false;
    const [save, setSave] = useState(false);
    const [open, setOpen] = useState(false);
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const { id } = useParams();
    const [community, setCommunity] = useState(null);

    const handleGetConnector = async () => {
        try {
            const response = await getCommunity(id);
            console.log("getCommunity", response);
            setCommunity(response?.data);
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
            const response = await getCommunities();
            console.log("getCommunities", response);
            setCommunities(response?.data?.communities);
        } catch (error) {
            console.log("Error fetching communities:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetConnector();
        handleGetCommunities();
        handleCheckCommunityFavorite();
    }, []);

    const handleFavoriteCommunity = async () => {
        // Check if user is subscribed
        if (!subscribed) {
            toast.error("You need to subscribe to save communities. Please upgrade your plan.");
            return;
        }

        try {
            const response = await favoriteCommunity(
                userInfo?.user?.id,
                id,
                token
            );
            console.log("favoriteCommunity response", response);

            // Then create a lead
            const leadData = {
                userId: userInfo?.user?.id,
                communityId: id,
                leadType: "community",
                notes: `User saved ${community?.name} as favorite community`,
                followUpDate: new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                ).toISOString(), // 7 days from now
            };

            const leadResponse = await createLead(leadData, token);
            console.log("createLead response", leadResponse);

            console.log("userInfo", response);
            toast.success(response?.data?.msg);
            handleCheckCommunityFavorite();
        } catch (error) {
          //Unable to add community to favorites. Please try again.
            console.log("Error adding community to favorites or creating lead:", error);
            toast.error(
                error?.response?.data?.msg ||
                    "Unable to add community to favorites. Please try again."
            );
        }
    };

    const handleRemoveFavoriteCommunity = async () => {
        console.log("isFavorite", isFavorite);

        try {
            const response = await removeFavoriteCommunity(
                userInfo?.user?.id,
                id,
                token
            );
            console.log("removeFavoriteCommunity", response);
            toast.success(response?.data?.msg);
            handleCheckCommunityFavorite();
        } catch (error) {
            console.log("Error adding community to favorites:", error);
            toast.error(
                error?.response?.data?.msg ||
                    "Unable to add community to favorites. Please try again."
            );
        }
    };

    const handleCheckCommunityFavorite = async () => {
        const response = await communityFavoriteChecker(
            userInfo?.user?.id,
            id,
            token
        );

        console.log("communityFavoriteChecker", response);
        setIsFavorite(response?.data?.isFavorite);
    };

    return (
        <>
            <div className='border border-border rounded-3xl p-8 mb-8 shadow-sm'>
                <div className='flex gap-6'>
                    <div className='min-w-[100px] h-[100px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center'>
                        <span className='text-4xl font-bold text-primary'>
                            {community?.name?.charAt(0)}
                        </span>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-4 mb-4'>
                            <h1 className='text-2xl font-bold text-gray-900'>
                                {community?.name}
                            </h1>
                            {community?.verified && (
                                <Image
                                    alt='Verified'
                                    width={60}
                                    height={24}
                                    src={"/assets/icons/verified.svg"}
                                />
                            )}
                            {community?.recordType === "owner record" ? (
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
                                    owner record
                                </span>
                            ) : community?.recordType === "public record" ? (
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap">
                                    public record
                                </span>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <span className='inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                                {Array.isArray(community?.commTypeCategory)
                                    ? community?.commTypeCategory.join(", ")
                                    : community?.commTypeCategory || "Community"}
                            </span>
                        </div>

                        <p className='text-gray-700 leading-relaxed mb-6 max-w-[70ch]'>
                            {community?.description}
                        </p>

                        <div className='grid grid-cols-3 gap-4 text-sm'>
                            <div>
                                <div className='text-gray-500 mb-1'>Community Type</div>
                                <div className='font-medium'>{community?.communityType || 'Not specified'}</div>
                            </div>
                            <div>
                                <div className='text-gray-500 mb-1'>Location</div>
                                <div className='font-medium'>{community?.location || 'Global'}</div>
                            </div>
                            <div>
                                <div className='text-gray-500 mb-1'>Access</div>
                                <div className='font-medium capitalize'>{community?.accessType || 'Not specified'}</div>
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

                    {/* Save community as favorite and create as lead*/}
                    <div
                        className={`flex flex-col items-center gap-1 transition-all ${
                            !subscribed ? 'text-gray-400 cursor-not-allowed opacity-60' :
                            isFavorite ? 'text-secondary cursor-pointer' : 'text-gray-500 hover:text-secondary cursor-pointer'
                        }`}
                        onClick={
                            !subscribed ? () => toast.error("You need to subscribe to save communities. Please upgrade your plan.") :
                            isFavorite
                                ? handleRemoveFavoriteCommunity
                                : handleFavoriteCommunity
                        }
                        title={!subscribed ? "Subscribe to save communities" : ""}
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
                        Community Details
                        {!subscribed && (
                            <span className='text-sm text-gray-500 font-normal'>(Subscribe to view)</span>
                        )}
                    </h2>

                    {subscribed && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-4'>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Community Type</div>
                                    <div className='font-medium'>{community?.communityType || 'Not specified'}</div>
                                </div>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Created</div>
                                    <div className='font-medium'>{new Date(community?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                </div>
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Access Type</div>
                                    <div className='font-medium capitalize'>{community?.accessType || 'Not specified'}</div>
                                </div>
                                {community?.website && (
                                    <div>
                                        <div className='text-sm text-gray-500 mb-1'>Website</div>
                                        <a
                                            href={community.website}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-primary hover:underline font-medium'
                                        >
                                            Visit Website →
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className='text-sm text-gray-500 mb-3'>Social Links</div>
                                <div className='flex flex-wrap gap-2'>
                                {community?.facebook && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://facebook.com/${
                                                    community?.facebook.startsWith(
                                                        "@"
                                                    )
                                                        ? community?.facebook.substring(
                                                              1
                                                          )
                                                        : community?.facebook
                                                }`
                                            )
                                        }
                                    >
                                        Facebook
                                    </button>
                                )}
                                {community?.instagram && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://instagram.com/${
                                                    community?.instagram.startsWith(
                                                        "@"
                                                    )
                                                        ? community?.instagram.substring(
                                                              1
                                                          )
                                                        : community?.instagram
                                                }`
                                            )
                                        }
                                    >
                                        Instagram
                                    </button>
                                )}
                                {community?.twitter && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://twitter.com/${
                                                    community?.twitter.startsWith(
                                                        "@"
                                                    )
                                                        ? community?.twitter.substring(
                                                              1
                                                          )
                                                        : community?.twitter
                                                }`
                                            )
                                        }
                                    >
                                        Twitter
                                    </button>
                                )}
                                {community?.telegram && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://t.me/${
                                                    community?.telegram.startsWith(
                                                        "@"
                                                    )
                                                        ? community?.telegram.substring(
                                                              1
                                                          )
                                                        : community?.telegram
                                                }`
                                            )
                                        }
                                    >
                                        Telegram
                                    </button>
                                )}
                                {community?.linkedIn && (
                                    <button
                                        className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200'
                                        onClick={() =>
                                            window.open(
                                                `https://linkedin.com/in/${
                                                    community?.linkedIn.startsWith(
                                                        "@"
                                                    )
                                                        ? community?.linkedIn.substring(
                                                              1
                                                          )
                                                        : community?.linkedIn
                                                }`
                                            )
                                        }
                                    >
                                        LinkedIn
                                    </button>
                                )}
                            </div>
                            </div>
                            {community?.recognition && (
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Special Achievements</div>
                                    <div className='font-medium'>{community?.recognition}</div>
                                </div>
                            )}
                            {community?.additionalService && (
                                <div>
                                    <div className='text-sm text-gray-500 mb-1'>Additional Services</div>
                                    <div className='font-medium'>{community?.additionalService}</div>
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
                                Subscribe to connect with the community owner
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {subscribed && (
                <CommunityRatings
                    communityId={community?.id}
                    averageRating={community?.rating}
                />
            )}
            {!subscribed && communities?.length > 0 && (
                <div>
                    <h2 className='text-xl font-semibold mb-6 flex items-center gap-2'>
                        <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                        </svg>
                        Related Communities
                    </h2>

                    <div className='space-y-4'>
                        {communities?.map((community) => (
                            <ConnectorCard
                                type='community'
                                verified={true}
                                title={community?.name}
                                subtitle={community?.description}
                                members={"500"}
                                id={community?.id}
                                key={community?.id}
                                date={community?.createdAt}
                            />
                        ))}
                    </div>
                </div>
            )}

            <ContactInfoModal open={open} setOpen={setOpen} community={community} />
        </>
    );
}
