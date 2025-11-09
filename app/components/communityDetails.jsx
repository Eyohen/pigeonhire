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

    const [subscribed, setSubscribed] = useState(false);
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
            <div className='border border-border rounded-3xl p-6 mb-8'>
                <div className='flex gap-[22px]'>
                    <div className='min-w-[83px] h-[77px] bg-gray-light'></div>

                    <div className='w-full'>
                        <div className='flex mb-6 whitespace-nowrap'>
                            <div className='title-14 text-gray mr-[45px]'>Name:</div>
                            <div className='title-18 font-medium mr-4'>{community?.name}</div>
                            <Image
                                alt=''
                                width={60}
                                height={24}
                                src={"/assets/icons/verified.svg"}
                            />
                        </div>
                        <div className='flex gap-2 mb-6'>
                            <div className='title-14 text-gray'>Description:</div>
                            <div className='leading-[140%] w-full max-w-[70ch]'>{community?.description}</div>
                        </div>
                        <div className='flex mb-4 whitespace-nowrap'>
                            <div className='title-14 text-gray mr-[22px]'>Role:</div>
                            <div className='mr-[29px]'>{community?.description}</div>
                            <div className='title-14 text-gray mr-[27px]'>Location:</div>
                            <div className='mr-8'>{community?.location}</div>
                            <div className='title-14 text-gray mr-[22px]'>Category:</div>
                            <div>
                                {Array.isArray(community?.commTypeCategory)
                                    ? community?.commTypeCategory.join(", ")
                                    : community?.commTypeCategory ||
                                      "Not provided"}
                            </div>
                        </div>
                        {subscribed && (
                            <button
                                className='primary-button max-w-[328px] h-[42px] shadow-none bg-secondary mt-8 mb-4'
                                onClick={() => setOpen(true)}
                            >
                                Contact
                            </button>
                        )}
                    </div>

                    {/* Save community as favorite and create as lead*/}
                    <div
                        className='cursor-pointer'
                        onClick={
                            isFavorite
                                ? handleRemoveFavoriteCommunity
                                : handleFavoriteCommunity
                        }
                    >
                        <Image
                            src={
                                isFavorite
                                    ? "/assets/icons/saveFilled.svg"
                                    : "/assets/icons/save.svg"
                            }
                            width={32}
                            height={32}
                            alt=''
                        />
                        Save
                    </div>
                </div>
                <div className='w-full h-px bg-border my-2 mb-6'></div>
                <div className='pl-[99px]'>
                    <div className='title-18 font-medium flex items-center gap-2 mb-[34px]'>
                        Community Details
                        {!subscribed && (
                            <Image
                                src={"/assets/icons/arrowDownStroke.svg"}
                                width={24}
                                height={24}
                                alt=''
                            />
                        )}
                    </div>

                    {subscribed && (
                        <div className='grid grid-cols-[167px_auto] gap-x-4 gap-y-6'>
                            <div className='title-14 text-gray'>Community type:</div>
                            <div>{community?.communityType}</div>
                            <div className='title-14 text-gray'>Created:</div>
                            <div>21st of January 2025</div>
                            <div className='title-14 text-gray'>Price tag:</div>
                            <div>
                                {" "}
                                <Image
                                    src={
                                        community?.accessType === "free"
                                            ? "/assets/icons/free.svg"
                                            : ""
                                    }
                                    width={46}
                                    height={21}
                                    alt=''
                                />
                            </div>
                            <div className='title-14 text-gray'>Communication platform:</div>
                            <div className='flex gap-2'>
                                {community?.facebook && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {community?.instagram && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {community?.twitter && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {community?.telegram && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {community?.linkedIn && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                        Linkedin
                                    </div>
                                )}
                            </div>
                            <div className='title-14 text-gray'>Special achievements:</div>
                            <div>{community?.recognition}</div>
                            <div className='title-14 text-gray'>Additional services:</div>
                            <div>{community?.additionalService}</div>
                        </div>
                    )}

                    {!subscribed && (
                        <>
                            <button
                                className='primary-button max-w-[318px] h-[66px] shadow-none rounded-[48px] bg-secondary ml-[158px] mb-4'
                                onClick={() => setSubscribed(true)}
                            >
                                Subscribe to view
                            </button>

                            <div className='title-14 ml-[158px] font-medium'>
                                Subscribe to connect with the community owner
                            </div>
                        </>
                    )}
                </div>
            </div>

            {subscribed && (
                <CommunityRatings
                    communityId={community?.id}
                    averageRating={community?.rating}
                />
            )}
            {!subscribed && (
                <>
                    <div className='title-18 font-medium mb-4'>
                        Related communities
                    </div>

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
                </>
            )}

            <ContactInfoModal open={open} setOpen={setOpen} />
        </>
    );
}
