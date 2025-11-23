"use client";

import NavigationDirectory from "@/app/components/navigationDirectory";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getCommunity } from "@/app/apis/community";

export default function ManageNetworkDetails() {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await getCommunity(id);
        setCommunity(response?.data);
      } catch (error) {
        console.error("Error fetching community:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCommunity();
    }
  }, [id]);

  if (loading) {
    return <div className="p-8">Loading community details...</div>;
  }

  if (!community) {
    return <div className="p-8">Community not found</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
      <div>
          <NavigationDirectory
                  links={[
                    {
                      name: "Home",
                      link: "/",
                    },
                    {
                      name: community?.name || "Community",
                      link: "/",
                    },
                    {
                      name: "View",
                    },
                  ]}
                />

                <div className="w-full h-[136px] bg-[#FAFAFA] mb-4"></div>
<br />
                <div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
                <div>Name:</div>
<div>{community?.name || "N/A"}</div>
<div>Description:</div>
<div>{community?.description || "No description provided"}</div>
<div>Category:</div>
<div>{community?.communityType || "N/A"}</div>
<div>Community size:</div>
<div>{community?.size || "N/A"}</div>
<div>Location:</div>
<div>{community?.location || "N/A"}{community?.state ? `, ${community.state}` : ""}</div>
<div>Contact information:</div>
<div>{community?.email || community?.phone || "N/A"}</div>
</div>
<div className="w-full h-px bg-[#E5E5E5] my-6"></div>
<div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
<div>Created:</div>
<div>{formatDate(community?.createdAt)}</div>
<div>Access Type:</div>
<div>{community?.accessType || "N/A"}</div>
<div>Communication platform:</div>
<div>{community?.communicationPlatform || "N/A"}</div>
<div>Engagement level:</div>
<div>{community?.engagementLevel || "N/A"}</div>
<div>Post frequency:</div>
<div>{community?.frequency ? `${community.frequency} days/week` : "N/A"}</div>
</div>
<div className="w-full h-px bg-[#E5E5E5] my-6"></div>
<div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">

<div>Content shared:</div>
<div>{Array.isArray(community?.contentShared) ? community.contentShared.join(", ") : community?.contentShared || "N/A"}</div>
<div>Communities interest:</div>
<div>{community?.communityInterest || "N/A"}</div>
<div>Website:</div>
<div>{community?.website || "N/A"}</div>
<div>Interaction types:</div>
<div>{Array.isArray(community?.communityGoal) ? community.communityGoal.join(", ") : community?.communityGoal || "N/A"}</div>
<div>Recognition/Awards:</div>
<div>{community?.recognition || "N/A"}</div>
<div>Additional services:</div>
<div>{community?.additionalService || "N/A"}</div>
<div>Unique Selling Point:</div>
<div>{community?.usp || "N/A"}</div>
                </div>

      </div>
  )
}