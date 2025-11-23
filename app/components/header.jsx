"use client"
import Image from "next/image";
import ListNetworkButton from "./listNetworkButton";
import { useSelector } from "react-redux";
import LandingHeader from "./landingHeader";

export default function Header() {

  const {token, userInfo} = useSelector((state) => state.auth);
  
  return (
    !!token ?
    <header className="w-full h-[118px] bg-gray-light grid grid-cols-[auto_220px] gap-8 pl-8 pr-8 items-center shrink-0 border-b border-gray-200">
      <div className="flex items-center justify-between border-r border-border pr-8">
        <div className="text-lg font-medium">
          Explore networks (Communities & Connectors)
        </div>

        <ListNetworkButton />
      </div>

      <div className="flex gap-4 items-center justify-end">
        <Image
          alt=""
          width={24}
          height={24}
          src={"/assets/icons/notifications.svg"}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        />

        <div className="flex gap-2 items-center">
          <div className="font-medium text-white min-w-[32px] h-8 flex items-center justify-center rounded-full bg-primary">{userInfo?.user?.fname?.split('')[0]}</div>
          <div className="text-sm font-medium">{userInfo?.user?.fname} {userInfo?.user?.lname}</div>
        </div>

      </div>
    </header> : <LandingHeader />
  );
}
