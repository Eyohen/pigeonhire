"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ConnectorCard from "./connectorCard";
import { getCommunities } from "../apis/community";
import { getConnectors } from "../apis/connector";

export default function SearchResults({ searchText }) {
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchText || searchText.trim() === "") {
        setCommunities([]);
        setConnectors([]);
        return;
      }

      setLoading(true);
      try {
        const [communitiesRes, connectorsRes] = await Promise.all([
          getCommunities(1, { search: searchText }),
          getConnectors(1, { search: searchText })
        ]);

        setCommunities(communitiesRes?.data?.communities || []);
        setConnectors(connectorsRes?.data?.connectors || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchText]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-lg text-gray-600">Searching...</div>
      </div>
    );
  }

  const hasResults = communities.length > 0 || connectors.length > 0;

  if (!hasResults) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center mb-8 mt-9">
          <Image
            alt=""
            width={120}
            height={120}
            src={"/assets/icons/notFound.svg"}
            className="pointer mb-7"
          />

          <div className="title-18 font-medium mb-4">Not Found</div>
          <div className="text-[#8D8D8D]">
            Sorry, we couldn't find any results matching your search criteria.
          </div>
          <div className="text-[#8D8D8D] mt-2">
            Try adjusting your search terms or filters.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {communities.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Communities ({communities.length})</h2>
          <div className="space-y-3">
            {communities.map((community) => (
              <ConnectorCard
                key={community.id}
                type="community"
                verified={community.verified}
                recordType={community.recordType}
                title={community.name}
                subtitle={community.description}
                members={community.size}
                id={community.id}
                date={community.createdAt}
              />
            ))}
          </div>
        </div>
      )}

      {connectors.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Connectors ({connectors.length})</h2>
          <div className="space-y-3">
            {connectors.map((connector) => (
              <ConnectorCard
                key={connector.id}
                type="connector"
                verified={connector.verified}
                recordType={connector.recordType}
                title={`${connector.firstName} ${connector.lastName}`}
                subtitle={connector.role}
                id={connector.id}
                date={connector.createdAt}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
