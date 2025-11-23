"use client";

import CommunityDetails from "@/app/components/communityDetails";
import NavigationDirectory from "@/app/components/navigationDirectory";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Community() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="font-medium flex items-center gap-0.5 mb-[17px] cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0"
      >
        <Image src={"/assets/icons/backArrow.svg"} width={24} height={24} alt="" />
        Back
      </button>

  <NavigationDirectory
        links={
            [
                {
                    name: "Home",
                    link: "/"
                },
                {
                    name: "Latest communities",
                }
            ]
        }
        />

      <CommunityDetails />



    </div>
  );
}
