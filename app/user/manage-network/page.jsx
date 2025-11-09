
"use client";

import { useState, useEffect } from "react";
import ManageNetworkTable from "@/app/components/manageNetworkTable";
import Image from "next/image";
import { getUserAnalytics } from "@/app/apis/analyticsService";

export default function ManageNetwork() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getUserAnalytics();
      
      if (result.success) {
        setAnalyticsData(result.data);
        setError(null);
      } else {
        setError(result.error);
        console.error('Failed to fetch analytics:', result.error);
      }
      
      setLoading(false);
    };

    fetchData();
  }, []);

  // Default values while loading or if data is unavailable
  const getCardValue = (value, defaultValue = 0) => {
    return loading ? "..." : value ?? defaultValue;
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="w-full h-[94px] border border-[#D9D9D9] rounded-lg p-3 px-6 flex gap-2">
          <Image
            src={"/assets/icons/communities.svg"}
            width={36}
            height={36}
            alt=""
          />
          <div>
            <div className="text-sm font-normal leading-[140%] mt-[9px] mb-[17px]">Total Communities</div>
            <div className="text-2xl font-semibold">4</div>
          </div>
        </div>
        <div className="w-full h-[94px] border border-[#D9D9D9] rounded-lg p-3 px-6 flex gap-2">
            <Image
              src={"/assets/icons/profileView.svg"}
              width={36}
              height={36}
              alt=""
            />
          <div>
            <div className="text-sm font-normal leading-[140%] mt-[9px] mb-[17px]">Total Profile view</div>
          <div className="font-semibold">
            {getCardValue(analyticsData?.analytics?.profilesViewed, 1200)}
          </div>
          </div>
        </div>
        <div className="w-full h-[94px] border border-[#D9D9D9] rounded-lg p-3 px-6 flex gap-2">
            <Image
              src={"/assets/icons/profileView.svg"}
              width={36}
              height={36}
              alt=""
            />
          <div>
            <div className="text-sm font-normal leading-[140%] mt-[9px] mb-[17px]">Total Contact click</div>
          <div className="font-semibold">
            {/* 500 */}
            {getCardValue(analyticsData?.recentActivity?.contacts, 500)}
          </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-600 my-[10px] p-[10px] bg-[#ffe6e6] rounded">
          Error loading analytics: {error}
        </div>
      )}

      <div className="text-lg font-medium mb-4">My Networks</div>
      <ManageNetworkTable />
    </div>
  );
}
