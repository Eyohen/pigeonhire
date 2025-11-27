
"use client";

import { useState, useEffect } from "react";
import ManageNetworkTable from "@/app/components/manageNetworkTable";
import Image from "next/image";
import { getUserAnalytics } from "@/app/apis/analyticsService";
import { getUserCommunities } from "@/app/apis/community";
import { useSelector } from "react-redux";

export default function ManageNetwork() {
  const { userInfo, token } = useSelector((state) => state.auth);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [totalCommunities, setTotalCommunities] = useState(0);
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

      // Fetch user's communities count
      if (userInfo?.user?.id) {
        try {
          const communitiesRes = await getUserCommunities(userInfo.user.id, token);
          setTotalCommunities(communitiesRes?.data?.communities?.length || 0);
        } catch (err) {
          console.error('Failed to fetch communities:', err);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [userInfo, token]);

  // Default values while loading or if data is unavailable
  const getCardValue = (value, defaultValue = 0) => {
    return loading ? "..." : value ?? defaultValue;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Networks</h1>
        <p className="text-gray-600">Track your network performance and manage your communities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Communities Card */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Image
                src={"/assets/icons/communities.svg"}
                width={32}
                height={32}
                alt=""
              />
            </div>
          </div>
          <div className="text-md font-medium text-gray-600 mb-1">Total Communities</div>
          <div className="text-3xl font-bold text-gray-900">{getCardValue(totalCommunities, 0)}</div>
        </div>

        {/* Total Profile Views Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <div className="text-md font-medium text-gray-600 mb-1">Total Profile Views</div>
          <div className="text-3xl font-bold text-gray-900">
            {getCardValue(analyticsData?.analytics?.profilesViewed, 0)}
          </div>
        </div>

        {/* Total Contact Clicks Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100/30 border border-green-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>
          <div className="text-md font-medium text-gray-600 mb-1">Total Contact Clicks</div>
          <div className="text-3xl font-bold text-gray-900">
            {getCardValue(analyticsData?.recentActivity?.contacts, 0)}
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-3 text-red-700 my-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span>Error loading analytics: {error}</span>
        </div>
      )}

      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">My Networks</h2>
        </div>
        <ManageNetworkTable />
      </div>
    </div>
  );
}
