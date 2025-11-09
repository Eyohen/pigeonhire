"use client"
import Image from "next/image";
import ListNetworkButton from "./listNetworkButton";
import { useSelector } from "react-redux";
import LandingHeader from "./landingHeader";

export default function Header() {

  const {token, userInfo} = useSelector((state) => state.auth);
  
  return (
    !!token ?
    <header className="w-full h-[118px] bg-gray-light grid grid-cols-[auto_189px] gap-8 pl-8 pr-16 items-center">
      <div className="flex items-center justify-between border-r border-border pr-8">
        <div className="text-lg font-medium">
          Explore networks (Communities & Connectors)
        </div>

        <ListNetworkButton />
      </div>

      <div className="flex gap-4 items-center">
        <Image
          alt=""
          width={24}
          height={24}
          src={"/assets/icons/notifications.svg"}
        />

        <div className="flex gap-2 items-center">
          <div className="font-medium text-white min-w-[32px] h-8 flex items-center justify-center rounded-full bg-primary">{userInfo?.user?.fname?.split('')[0]}</div>
          {userInfo?.user?.fname} {userInfo?.user?.lname}

        </div>

      </div>
    </header> : <LandingHeader />
  );
}
