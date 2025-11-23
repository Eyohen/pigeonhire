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
      className="relative w-full max-w-fit h-[50px] flex items-center justify-center gap-2 bg-primary rounded-button font-medium text-base text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-200 border-none px-6 z-[2] phone:w-[120px] phone:text-[11px] phone:h-8 phone:px-3"
      >
        <Image alt="" width={20} height={20} src={"/assets/icons/plus.svg"} className="phone:w-4 phone:h-4" />
        <span>List a network</span>
      </button>

      {open &&
        <>
        <div className="absolute top-full mt-2 right-0 w-[220px] flex flex-col gap-1 p-2 bg-white border border-gray-200 rounded-lg shadow-xl z-[2] animate-in fade-in slide-in-from-top-2 duration-200">
        <Link
          href={"/user/list-community"}
          prefetch={true}
          className="text-sm w-full px-4 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-150 flex items-center gap-2 font-medium text-gray-700 hover:text-primary"
          onClick={() => setOpen(false)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          List a community
        </Link>
        <Link
          href={"/user/list-connector"}
          prefetch={true}
          className="text-sm w-full px-4 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-150 flex items-center gap-2 font-medium text-gray-700 hover:text-primary"
          onClick={() => setOpen(false)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          List as a connector
        </Link>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen z-[1]"
      onClick={() => setOpen(false)}
      ></div>
      </>
      }
    </div>
  );
}
