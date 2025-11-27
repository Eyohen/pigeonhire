"use client";
import { useEffect, useState } from "react";
import ConnectorCard from "./connectorCard";
import { getCommunities } from "../apis/community";
import { getConnectors } from "../apis/connector";
import Pagination from "./pagination";

export default function ConnectorsAndCommunities({ filters }) {
  const [tab, setTab] = useState("connectors");
  const [loading, setLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [communityTotalPages, setCommunityTotalPages] = useState(1);
  const [connectorTotalPages, setConnectorTotalPages] = useState(1);

  const handleGetCommunities = async (page = 1) => {
    setLoading(true);
    try {
      const response = await getCommunities(page, filters);
      const response2 = await getConnectors(page, filters);
      console.log("getCommunities", response);
      console.log("getConnectors", response2);
      setCommunities(response?.data?.communities || []);
      setConnectors(response2?.data?.connectors || []);
      setCommunityTotalPages(response?.data?.totalPages || 1);
      setConnectorTotalPages(response2?.data?.totalPages || 1);
    } catch (error) {
      console.log("Error fetching communities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCommunities(1);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    handleGetCommunities(1);
  }, [tab, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleGetCommunities(page);
  };
  return (
    <div className="w-full py-4">
      <div className="flex gap-8 mb-6 border-b border-[#E5E5E5]">
        <div
          className={`font-normal w-56 h-[46px] flex items-center justify-center cursor-pointer transition-colors ${
            tab === "connectors" ? "text-secondary border-b-2 border-secondary" : "text-[#8D8D8D] hover:text-gray-700"
          }`}
          onClick={() => setTab("connectors")}
        >
          Latest Connectors
        </div>
        <div
          className={`font-normal w-[150px] h-[46px] flex items-center justify-center cursor-pointer transition-colors ${
            tab === "communities" ? "text-secondary border-b-2 border-secondary" : "text-[#8D8D8D] hover:text-gray-700"
          }`}
          onClick={() => setTab("communities")}
        >
          Latest Communities
        </div>
      </div>

      <div className="mb-8">
        {tab === "connectors" && (
          <div className="space-y-3">
            {connectors?.slice(0, 2).map((connector, index) => (
              <ConnectorCard
                key={connector?.id || index}
                type="connector"
                verified={true}
                recordType={connector?.recordType}
                title={connector?.communityName}
                subtitle={connector?.description}
                members={"500"}
                id={connector?.id}
                date={connector?.createdAt}
              />
            ))}
          </div>
        )}

        {tab === "communities" && (
          <div className="space-y-3">
            {communities?.slice(0, 2).map((community, index) => (
              <ConnectorCard
                key={community?.id || index}
                type="community"
                verified={true}
                recordType={community?.recordType}
                title={community?.name}
                subtitle={community?.description}
                members={"500"}
                id={community?.id}
                date={community?.createdAt}
              />
            ))}
          </div>
        )}
      </div>

      <div className="font-medium mb-5 text-gray-900">All</div>
      {tab === "connectors" && (
        <>
          <div className="space-y-3 mb-6">
            {connectors?.map((connector, index) => (
              <ConnectorCard
                key={connector?.id || index}
                type="connector"
                verified={true}
                recordType={connector?.recordType}
                title={connector?.communityName}
                subtitle={connector?.description}
                members={"500"}
                id={connector?.id}
                date={connector?.createdAt}
              />
            ))}
          </div>
          {connectorTotalPages > 1 && (
            <div className="w-full">
              <Pagination
                currentPage={currentPage}
                totalPages={connectorTotalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}

      {tab === "communities" && (
        <>
          <div className="space-y-3 mb-6">
            {communities?.map((community, index) => (
              <ConnectorCard
                key={community?.id || index}
                type="community"
                verified={true}
                recordType={community?.recordType}
                title={community?.name}
                subtitle={community?.description}
                members={"500"}
                id={community?.id}
                date={community?.createdAt}
              />
            ))}
          </div>
          {communityTotalPages > 1 && (
            <div className="w-full">
              <Pagination
                currentPage={currentPage}
                totalPages={communityTotalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
