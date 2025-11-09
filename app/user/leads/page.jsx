"use client";

import { useState, useEffect } from "react";
import LeadsTable from "@/app/components/leadsTable";
import Image from "next/image";
import { getUserAnalytics } from "@/app/apis/analyticsService";

export default function Leads() {
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

  // Calculate saved communities count from leads data
  const getSavedCommunitiesCount = () => {
    if (!analyticsData?.detailedData?.leads?.data) return 0;
    return analyticsData.detailedData.leads.data.filter(
      lead => lead.leadType === "community" && lead.connectorId === null
    ).length;
  };

  // Calculate saved connectors count from leads data
  const getSavedConnectorsCount = () => {
    if (!analyticsData?.detailedData?.leads?.data) return 0;
    return analyticsData.detailedData.leads.data.filter(
      lead => lead.leadType === "connector" && lead.communityId === null
    ).length;
  };

  // Default values while loading or if data is unavailable
  const getCardValue = (value, defaultValue = 0) => {
    return loading ? "..." : value ?? defaultValue;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="w-full h-[94px] border border-border-light rounded-lg p-3 px-6 flex gap-2">
          <Image
            src={"/assets/icons/communities.svg"}
            width={36}
            height={36}
            alt=""
          />
          <div>
            <div className="text-sm mt-[9px] mb-[17px]">Saved Communities</div>
            <div className="text-2xl font-semibold">
              {loading ? "..." : getSavedCommunitiesCount()}
            </div>
          </div>
        </div>
        <div className="w-full h-[94px] border border-border-light rounded-lg p-3 px-6 flex gap-2">
            <Image
              src={"/assets/icons/savedConnectors.svg"}
              width={36}
              height={36}
              alt=""
            />
          <div>
            <div className="text-sm mt-[9px] mb-[17px]">Saved Connectors</div>
          <div className="font-semibold">
            {loading ? "..." : getSavedConnectorsCount()}
          </div>
          </div>
        </div>
        <div className="w-full h-[94px] border border-border-light rounded-lg p-3 px-6 flex gap-2">
            <Image
              src={"/assets/icons/totalContacted.svg"}
              width={36}
              height={36}
              alt=""
            />
          <div>
            <div className="text-sm mt-[9px] mb-[17px]">Total contacted</div>
          <div className="font-semibold">
            {getCardValue(analyticsData?.analytics?.totalContacted, 500)}
          </div>
          </div>
        </div>
        <div className="w-full h-[94px] border border-border-light rounded-lg p-3 px-6 flex gap-2">
            <Image
              src={"/assets/icons/profilesViewed.svg"}
              width={36}
              height={36}
              alt=""
            />
          <div>
            <div className="text-sm mt-[9px] mb-[17px]">Total profile viewed</div>
          <div className="font-semibold">
            {getCardValue(analyticsData?.analytics?.profilesViewed, 500)}
          </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-600 my-2.5 p-2.5 bg-red-50 rounded">
          Error loading analytics: {error}
        </div>
      )}

      <div className="text-lg font-medium mb-4">My Leads</div>
      <LeadsTable />
    </div>
  );
}