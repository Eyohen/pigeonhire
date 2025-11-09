"use client"
import Image from "next/image";
import FiltersSidebar from "./filtersSidebar";
import { useState } from "react";

export default function Filters() {
      const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-[1100px] overflow-x-auto mx-auto mb-8 hidden-scroll-bar">
        <div className="w-full flex items-center gap-4 mt-8">

      <div className="title-14 bg-[#F5F5F5] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer"
      onClick={() => setOpen(true)}
      >
        <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/controls.svg"}
        />
        All filters
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Category

      <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowDown.svg"}
        />
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Connectors</div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Connector type
      <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowDown.svg"}
        />
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Connector platform

      <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowDown.svg"}
        />
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">
        Communities
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">
        Connectors
        <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowDown.svg"}
        />
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Community type
      <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowDown.svg"}
        />
      </div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Community size</div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Connectors</div>
      <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer">Connectors</div>
        </div>

        <FiltersSidebar open={open} setOpen={setOpen} />
    </div>
  );
}
