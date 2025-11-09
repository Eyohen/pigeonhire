"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConnectorCard from "./connectorCard";

export default function CategoryInner() {
  const [tab, setTab] = useState("connectors");

  return (
    <div>
      <div className="flex gap-8 mb-4 border-b border-border">
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${tab === "connectors" ? "!text-secondary border-b border-secondary" : ""}`}
          onClick={() => setTab("connectors")}
        >
          Connectors for Content & Copywriting
        </div>
        <div
          className={`text-lg font-medium text-gray h-[46px] flex items-center justify-center cursor-pointer px-4 ${tab === "communities" ? "!text-secondary border-b border-secondary" : ""}`}
          onClick={() => setTab("communities")}
        >
          Communities for Content & Copywriting
        </div>
      </div>

    {tab === "connectors" && <>
        <ConnectorCard
        verified={true}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />
      <ConnectorCard
        verified={false}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />
      <ConnectorCard
        verified={true}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />
      <ConnectorCard
        verified={false}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />
    </>}

    {tab === "communities" && <>
      <ConnectorCard
        verified={true}
        title={"Startup & Entrepreneurship Hub"}
        subtitle={
          "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
        }
        members={"500"}
      />
      <ConnectorCard
        verified={false}
        title={"Startup & Entrepreneurship Hub"}
        subtitle={
          "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
        }
        members={"500"}
      />
      <ConnectorCard
        verified={true}
        title={"Startup & Entrepreneurship Hub"}
        subtitle={
          "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
        }
        members={"500"}
      />
      <ConnectorCard
        verified={false}
        title={"Startup & Entrepreneurship Hub"}
        subtitle={
          "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
        }
        members={"500"}
      />
    </>}

    </div>
  );
}
