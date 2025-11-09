"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ListNetworkButton() {
    const [open, setOpen] = useState(false)
  return (
    <div className="relative w-fit">
      <button
      onClick={() => setOpen(!open)}
      className="relative w-full max-w-fit h-[50px] flex items-center justify-center gap-2 bg-primary rounded-button font-medium text-lg text-white shadow-button border-none px-[23.5px] z-[2] phone:w-[120px] phone:text-[11px] phone:h-8"
      >
        <Image alt="" width={24} height={24} src={"/assets/icons/plus.svg"} />
        List a network
      </button>

      {open &&
        <>
        <div className="absolute w-[201px] flex flex-col gap-2 p-[6px] px-2 bg-white border border-border-light rounded z-[2]">
        <Link href={"/user/list-community"} prefetch={true} className="text-sm w-full h-[34px] p-2 cursor-pointer hover:bg-gray-light">List a community</Link>
        <Link href={"/user/list-connector"} prefetch={true} className="text-sm w-full h-[34px] p-2 cursor-pointer hover:bg-gray-light">List as a connector</Link>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen z-[1]"
      onClick={() => setOpen(false)}
      ></div>
      </>
      }
    </div>
  );
}
