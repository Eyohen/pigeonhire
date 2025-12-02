"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ConnectorCard from "./connectorCard";
import { getCommunities } from "../apis/community";
import { getConnectors } from "../apis/connector";

const ITEMS_PER_PAGE = 4;

export default function CategoryInner() {
  const [tab, setTab] = useState("communities");
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [communityPage, setCommunityPage] = useState(1);
  const [connectorPage, setConnectorPage] = useState(1);
  const [communityTotalPages, setCommunityTotalPages] = useState(1);
  const [connectorTotalPages, setConnectorTotalPages] = useState(1);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    if (category) {
      fetchData();
    }
  }, [category, tab, communityPage, connectorPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (tab === "communities") {
        const response = await getCommunities(communityPage, { category, limit: ITEMS_PER_PAGE });
        setCommunities(response?.data?.communities || []);
        setCommunityTotalPages(response?.data?.totalPages || 1);
      } else {
        const response = await getConnectors(connectorPage, { category, limit: ITEMS_PER_PAGE });
        setConnectors(response?.data?.connectors || []);
        setConnectorTotalPages(response?.data?.totalPages || 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const currentPage = tab === "communities" ? communityPage : connectorPage;
  const totalPages = tab === "communities" ? communityTotalPages : connectorTotalPages;
  const setCurrentPage = tab === "communities" ? setCommunityPage : setConnectorPage;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md border transition-colors ${
            currentPage === 1
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
          }`}
        >
          <Image
            src="/assets/icons/backArrow.svg"
            width={16}
            height={16}
            alt="Previous"
          />
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
            >
              1
            </button>
            {startPage > 2 && <span className="text-gray-400">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-md border transition-colors cursor-pointer ${
              currentPage === page
                ? "bg-secondary text-white border-secondary"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-400">...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-md border transition-colors ${
            currentPage === totalPages
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
          }`}
        >
          <Image
            src="/assets/icons/backArrow.svg"
            width={16}
            height={16}
            alt="Next"
            className="rotate-180"
          />
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="flex gap-8 mb-4 border-b border-border">
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${
            tab === "communities" ? "!text-secondary border-b border-secondary" : ""
          }`}
          onClick={() => handleTabChange("communities")}
        >
          Communities for {category}
        </div>
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${
            tab === "connectors" ? "!text-secondary border-b border-secondary" : ""
          }`}
          onClick={() => handleTabChange("connectors")}
        >
          Connectors for {category}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          {tab === "communities" && (
            <div>
              <div className="space-y-4">
                {communities.length > 0 ? (
                  communities.map((community) => (
                    <ConnectorCard
                      key={community?.id}
                      type="community"
                      verified={community?.verified}
                      recordType={community?.recordType}
                      title={community?.name}
                      subtitle={community?.description}
                      members={community?.memberCount || "500"}
                      id={community?.id}
                      date={community?.createdAt}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No communities found for this category
                  </div>
                )}
              </div>
              {renderPagination()}
            </div>
          )}

          {tab === "connectors" && (
            <div>
              <div className="space-y-4">
                {connectors.length > 0 ? (
                  connectors.map((connector) => (
                    <ConnectorCard
                      key={connector?.id}
                      type="connector"
                      verified={connector?.verified}
                      recordType={connector?.recordType}
                      title={`${connector?.firstName} ${connector?.lastName}`}
                      subtitle={connector?.description}
                      id={connector?.id}
                      date={connector?.createdAt}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No connectors found for this category
                  </div>
                )}
              </div>
              {renderPagination()}
            </div>
          )}
        </>
      )}
    </div>
  );
}
