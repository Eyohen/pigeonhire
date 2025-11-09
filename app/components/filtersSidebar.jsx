"use client"
import Image from "next/image";
import { useState } from "react";

export default function FiltersSidebar({open, setOpen}) {
    const [filter, setFilter] = useState("all")
  return (
    open &&
    <div className="fixed top-0 right-0 w-full max-w-[414px] h-screen pt-[72px] bg-white z-[3]">
      <div className="title-18 font-medium flex justify-between px-8 pb-[17px] border-b border-[#E5E5E5]">
        <div>Filters</div>

        <Image
          alt=""
          width={24}
          height={24}
          src={"/assets/icons/close.svg"}
          onClick={() => setOpen(false)}
          className="pointer"
        />
      </div>
      <div
      className={`title-18 flex items-center justify-between px-8 mt-8 cursor-pointer ${filter === "all" ? "text-[#161616]" : "text-[#8D8D8D]"}`}
      onClick={() => setFilter("all")}
      >
        <div>All</div>

        <input type="radio" name="" id="" checked={filter === "all"} className="w-8 h-8" />
      </div>
      <div
      className={`title-18 flex items-center justify-between px-8 mt-8 cursor-pointer ${filter === "communities" ? "text-[#161616]" : "text-[#8D8D8D]"}`}
      onClick={() => setFilter("communities")}
      >
        <div>Communities</div>

        <input type="radio" name="" id="" checked={filter === "communities"} className="w-8 h-8" />
      </div>
      <div
      className={`title-18 flex items-center justify-between px-8 mt-8 cursor-pointer ${filter === "connectors" ? "text-[#161616]" : "text-[#8D8D8D]"}`}
      onClick={() => setFilter("connectors")}
      >
        <div>Connectors</div>

        <input type="radio" name="" id="" checked={filter === "connectors"} className="w-8 h-8" />
      </div>
    </div>
  );
}
