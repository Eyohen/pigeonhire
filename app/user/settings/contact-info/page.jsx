"use client"
import DeactivationModal from "@/app/components/deactivationModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SettingsContact() {
  const [open, setOpen] = useState(false);
  
  // Get user info from Redux store
  const { userInfo } = useSelector((state) => state.auth);
  
  // Extract user data with fallbacks
  const userData = {
    name: userInfo?.user ? 
      `${userInfo.user.firstName || userInfo.user.fname || ''} ${userInfo.user.lastName || userInfo.user.lname || ''}`.trim() 
      : 'N/A',
    email: userInfo?.user?.email || 'N/A',
    phone: userInfo?.user?.phone || 'N/A',
    address: userInfo?.user?.location || userInfo?.user?.address || 'N/A',
    country: userInfo?.user?.country || 'N/A',
    city: userInfo?.user?.city || 'N/A'
  };
  
  return (
    <div>
      <div className="border border-[#E5E5E5] rounded-3xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>Contact Information</div>
          <Link href={"/user/settings/contact-info/edit"}>
            <Image alt="Edit" width={50} height={18} src={"/assets/icons/edit.svg"} />
          </Link>
        </div>

        <div className="grid grid-cols-[114px_auto] gap-4 mb-[41px] text-sm leading-[140%]">
          <div className="text-[#8D8D8D]">Name:</div>
          <div className="font-medium">{userData.name}</div>

          <div className="text-[#8D8D8D]">Email:</div>
          <div className="font-medium">{userData.email}</div>

          <div className="text-[#8D8D8D]">Phone number:</div>
          <div className="font-medium">{userData.phone}</div>

          <div className="text-[#8D8D8D]">Contact address:</div>
          <div className="font-medium">{userData.address}</div>

          <div className="text-[#8D8D8D]">Country:</div>
          <div className="font-medium">{userData.country}</div>

          <div className="text-[#8D8D8D]">City:</div>
          <div className="font-medium">{userData.city}</div>

          <div className="text-[#8D8D8D]">List as:</div>
          <div>
            <Image
              alt="Connector Status"
              width={71}
              height={20}
              src={"/assets/icons/connectorGreen.svg"}
              className="connector-card__role"
            />
          </div>
        </div>
      </div>

      <div className="text-sm leading-[140%] w-full underline text-right font-medium text-[#FA4D56] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Deactivate Account
      </div>

      <DeactivationModal open={open} setOpen={setOpen} />
    </div>
  );
}