"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ConnectorCard from "./connectorCard";
import { getCommunities } from "../apis/community";
import { getConnectors } from "../apis/connector";

export default function CategoryInner() {
  const [tab, setTab] = useState("communities");
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    if (category) {
      fetchData();
    }
  }, [category, tab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (tab === "communities") {
        const response = await getCommunities(1, { category });
        setCommunities(response?.data?.communities || []);
      } else {
        const response = await getConnectors(1, { category });
        setConnectors(response?.data?.connectors || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-8 mb-4 border-b border-border">
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${
            tab === "communities" ? "!text-secondary border-b border-secondary" : ""
          }`}
          onClick={() => setTab("communities")}
        >
          Communities for {category}
        </div>
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${
            tab === "connectors" ? "!text-secondary border-b border-secondary" : ""
          }`}
          onClick={() => setTab("connectors")}
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
          )}

          {tab === "connectors" && (
            <div>
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
          )}
        </>
      )}
    </div>
  );
}
