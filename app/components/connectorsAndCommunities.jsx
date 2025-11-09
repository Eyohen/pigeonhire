"use client";
import { useEffect, useState } from "react";
import ConnectorCard from "./connectorCard";
import { getCommunities } from "../apis/community";
import { getConnectors } from "../apis/connector";

export default function ConnectorsAndCommunities() {
  const [tab, setTab] = useState("connectors");
  const [loading, setLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);



  const handleGetCommunities = async () => {
    setLoading(true);
    try {
      const response = await getCommunities();
      const response2 = await getConnectors();
      console.log("getCommunities", response);
      console.log("getConnectors", response2);
      setCommunities(response?.data?.communities);
      setConnectors(response2?.data?.connectors);
    } catch (error) {
      console.log("Error fetching communities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCommunities();
  }, []);
  return (
    <div className="w-full mt-8">
      <div className="flex gap-8 mb-4 border-b border-[#E5E5E5]">
        <div
          className={`title-18 font-medium w-48 h-[46px] flex items-center justify-center cursor-pointer ${
            tab === "connectors" ? "text-secondary border-b border-secondary" : "text-[#8D8D8D]"
          }`}
          onClick={() => setTab("connectors")}
        >
          Latest Connectors
        </div>
        <div
          className={`title-18 font-medium w-48 h-[46px] flex items-center justify-center cursor-pointer ${
            tab === "communities" ? "text-secondary border-b border-secondary" : "text-[#8D8D8D]"
          }`}
          onClick={() => setTab("communities")}
        >
          Latest Communities
        </div>
      </div>

      {tab === "connectors" && (
         connectors?.map((connector) =>
          <ConnectorCard
          type="connector"
          verified={true}
          title={connector?.communityName}
          subtitle={connector?.description}
          members={"500"}
          id={connector?.id}
          date={connector?.createdAt}
          />
        )

      )}

      {tab === "communities" && (
        communities?.map((community) =>
          <ConnectorCard
          type="community"
          verified={true}
          title={community?.name}
          subtitle={community?.description}
          members={"500"}
          id={community?.id}
          date={community?.createdAt}
        />
        )
      )}

      <div className="title-18 font-medium my-4">All</div>
      {tab === "connectors" && (
         connectors?.map((connector) =>
          <ConnectorCard
          type="connector"
          verified={true}
          title={connector?.communityName}
          subtitle={connector?.description}
          members={"500"}
          id={connector?.id}
          date={connector?.createdAt}
          />
        )

      )}

      {tab === "communities" &&

          communities?.map((community) =>
            <ConnectorCard
            type="community"
            verified={true}
            title={community?.name}
            subtitle={community?.description}
            members={"500"}
            id={community?.id}
            date={community?.createdAt}
            />
          )

      }
    </div>
  );
}
