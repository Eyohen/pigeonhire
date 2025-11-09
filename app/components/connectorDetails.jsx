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

    const [subscribed, setSubscribed] = useState(false);
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
            <div className='border border-border rounded-3xl p-6 mb-8'>
                <div className='flex gap-[22px]'>
                    <div className='min-w-[83px] h-[77px] bg-gray-light'></div>

                    <div className='w-full'>
                        <div className='flex mb-6 whitespace-nowrap'>
                            <div className='title-14 text-gray mr-[45px]'>Name:</div>
                            <div className='title-18 font-medium mr-4'>
                                {connector?.firstName} {connector?.lastName}
                            </div>
                            <Image
                                alt=''
                                width={60}
                                height={24}
                                src={"/assets/icons/verified.svg"}
                            />
                        </div>
                        <div className='flex gap-2 mb-6'>
                            <div className='title-14 text-gray'>Description:</div>
                            <div className='leading-[140%] w-full max-w-[70ch]'>{connector?.description}</div>
                        </div>
                        <div className='flex mb-4 whitespace-nowrap'>
                            <div className='title-14 text-gray mr-[22px]'>Role:</div>
                            <div className='mr-[29px]'>{connector?.description}</div>
                            <div className='title-14 text-gray mr-[27px]'>Location:</div>
                            <div className='mr-8 whitespace-normal break-words'>{connector?.community?.location}</div>
                            <div className='title-14 text-gray mr-[22px]'>Category:</div>
                            <div>
                                {Array.isArray(
                                    connector?.community?.commTypeCategory
                                )
                                    ? connector?.community?.commTypeCategory.join(
                                          ", "
                                      )
                                    : connector?.community?.commTypeCategory ||
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

                    {/* Save connector as favorite and create as lead*/}
                    <div
                        className='cursor-pointer'
                        onClick={
                            isFavorite
                                ? handleRemoveFavoriteConnector
                                : handleFavoriteConnector
                        }
                    >
                        <Image
                            onMouseEnter={() => setSave(true)}
                            onMouseLeave={() => setSave(false)}
                            src={
                                save
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
                        Connector Details
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
                            <div className='title-14 text-gray'>Connection type:</div>
                            <div>{connector?.connectionType}</div>
                            <div className='title-14 text-gray'>Created:</div>
                            <div>21st of January 2025</div>
                            <div className='title-14 text-gray'>Price tag:</div>
                            <div>
                                {" "}
                                <Image
                                    src={
                                        connector?.community?.accessType ===
                                        "free"
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
                                {connector?.facebook && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {connector?.instagram && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {connector?.twitter && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {connector?.telegram && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                    </div>
                                )}
                                {connector?.linkedIn && (
                                    <div
                                        className='title-14 bg-gray-light border border-[#F6911F33] px-2 py-1 rounded-[18px] cursor-pointer'
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
                                        Linkedin
                                    </div>
                                )}
                            </div>
                            <div className='title-14 text-gray'>Special achievements:</div>
                            <div>{connector?.community?.recognition}</div>
                            <div className='title-14 text-gray'>Additional services:</div>
                            <div>{connector?.community?.additionalService}</div>
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
                <ConnectorRatings
                    connectorId={connector?.id}
                    averageRating={connector?.rating}
                />
            )}
            {!subscribed && (
                <>
                    <div className='title-18 font-medium mb-4'>
                        Related connectors
                    </div>

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
                </>
            )}

            <ContactInfoModal open={open} setOpen={setOpen} />
        </>
    );
}
