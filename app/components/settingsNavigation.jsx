"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsNavigation() {
  
      const pathname = usePathname();
    
      console.log("pathname", pathname);

  return (
    <div className="border border-[#E5E5E5] p-5 rounded-3xl flex flex-col gap-5 h-[537px]">
    <Link
    href={"/user/settings/contact-info"}
    prefetch={true}
    className={`p-[15px_12px] border rounded-lg flex items-center gap-3 ${pathname?.includes("contact-info") ? "border-[#F6911F]" : "border-[#E5E5E5]"}`}
    >
      <Image
        className="flex-shrink-0"
        alt=""
        width={31}
        height={31}
        src={"/assets/icons/profile.svg"}
      />
      <div className="w-full">
        <div className="font-medium mb-1">My Profile</div>
        <div className="text-sm leading-[140%] text-[#8D8D8D]">
          Provide personal details and how we can reach you
        </div>
      </div>

      <Image
        className="flex-shrink-0"
        alt=""
        width={24}
        height={24}
        src={"/assets/icons/arrowRight.svg"}
      />
    </Link>
    <Link
    className={`p-[15px_12px] border rounded-lg flex items-center gap-3 ${pathname?.includes("password") ? "border-[#F6911F]" : "border-[#E5E5E5]"}`}
    href={"/user/settings/password"}
    prefetch={true}
    >
      <Image
        className="flex-shrink-0"
        alt=""
        width={31}
        height={31}
        src={"/assets/icons/password.svg"}
      />
      <div className="w-full">
        <div className="font-medium mb-1">
          Password and Security
        </div>
        <div className="text-sm leading-[140%] text-[#8D8D8D]">
          Update your password and secure your account{" "}
        </div>
      </div>

      <Image
        className="flex-shrink-0"
        alt=""
        width={24}
        height={24}
        src={"/assets/icons/arrowRight.svg"}
      />
    </Link>
    <Link
    className={`p-[15px_12px] border rounded-lg flex items-center gap-3 ${pathname?.includes("payments") ? "border-[#F6911F]" : "border-[#E5E5E5]"}`}
    href={"/user/settings/payments"}
    >
      <Image
        className="flex-shrink-0"
        alt=""
        width={31}
        height={31}
        src={"/assets/icons/payments.svg"}
      />
      <div className="w-full">
        <div className="font-medium mb-1">
        Payments
        </div>
        <div className="text-sm leading-[140%] text-[#8D8D8D]">
        Review payments methods and update card details
        </div>
      </div>

      <Image
        className="flex-shrink-0"
        alt=""
        width={24}
        height={24}
        src={"/assets/icons/arrowRight.svg"}
      />
    </Link>
    <Link
    className={`p-[15px_12px] border rounded-lg flex items-center gap-3 ${pathname?.includes("notifications") ? "border-[#F6911F]" : "border-[#E5E5E5]"}`}
    href={"/user/settings/notifications"}
    >
      <Image
        className="flex-shrink-0"
        alt=""
        width={31}
        height={31}
        src={"/assets/icons/pushNotifications.svg"}
      />
      <div className="w-full">
        <div className="font-medium mb-1">
          Push Notifications
        </div>
        <div className="text-sm leading-[140%] text-[#8D8D8D]">
          Toggle on/off notifications you want{" "}
        </div>
      </div>

      <Image
        className="flex-shrink-0"
        alt=""
        width={24}
        height={24}
        src={"/assets/icons/arrowRight.svg"}
      />
    </Link>
  </div>

  );
}
