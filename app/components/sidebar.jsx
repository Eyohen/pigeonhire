"use client";
import Image from "next/image";
import SearchIcon from "./searchIcon";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NetworkIcon from "./networkIcon";
import UpgradeModal from "./upgradePlanModal";
import { useState, useEffect } from "react";
import UpgradeModalPay from "./upgradePlanModalPay";
import LeadsIcon from "./leadsIcon";
import SettingsIcon from "./settingsIcon";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("Free plan");

  const {token, userInfo} = useSelector((state) => state.auth);
  console.log("userInfo", userInfo);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!token) return;
    // Replace with your actual endpoint if different
    fetch("/api/subscriptions/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.subscription && data.subscription.status === "active") {
          let planName = "Free plan";
          switch (data.subscription.planType) {
            case "monthly":
              planName = "Essential plan";
              break;
            case "annually":
              planName = "Premier plan";
              break;
            case "quarterly":
              planName = "Pro plan";
              break;
            default:
              planName = data.subscription.planType.charAt(0).toUpperCase() + data.subscription.planType.slice(1) + " plan";
          }
          setCurrentPlan(planName);
        } else {
          setCurrentPlan("Free plan");
        }
      })
      .catch(() => setCurrentPlan("Free plan"));
  }, [token]);

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    router.push("/login");
    window.scrollTo(0, 0);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted || !token) {
    return null;
  }

  return (
    <div className="w-[265px] min-w-[265px] bg-gray-light pb-10 overflow-y-auto flex flex-col">
      <Link href="/" prefetch={true} className="w-full h-36 flex items-center justify-center shrink-0">
        <Image alt="" width={200} height={40} src={"/assets/icons/logo.svg"} />
      </Link>

      <Link
        href="/user"
        prefetch={true}
        className={
          pathname === "/user"
            ? "w-full h-14 bg-white flex items-center gap-2 px-8 font-medium shrink-0 text-black transition-colors"
            : "w-full h-14 bg-transparent hover:bg-white/50 flex items-center gap-2 px-8 font-medium shrink-0 text-gray transition-colors cursor-pointer"
        }
      >
        <div>
          <SearchIcon fill={pathname === "/user" ? "#000" : "#8D8D8D"} />
        </div>
        <div>Explore networks</div>
      </Link>

      <div className="mt-4 space-y-3">
        <Link
          className={
            pathname?.includes("manage-network")
              ? "w-full h-14 px-8 flex items-center gap-2 bg-white text-black font-medium transition-colors rounded-r-lg"
              : "w-full h-14 px-8 flex items-center gap-2 text-gray hover:bg-white/50 transition-colors cursor-pointer rounded-r-lg"
          }
          href="/user/manage-network"
          prefetch={true}
        >
          <NetworkIcon color={pathname?.includes("manage-network") && "#000"} />
          Manage Network
        </Link>
        <Link
          className={
            pathname?.includes("leads")
              ? "w-full h-14 px-8 flex items-center gap-2 bg-white text-black font-medium transition-colors rounded-r-lg"
              : "w-full h-14 px-8 flex items-center gap-2 text-gray hover:bg-white/50 transition-colors cursor-pointer rounded-r-lg"
          }
          href="/user/leads"
          prefetch={true}
        >
          <LeadsIcon color={pathname?.includes("leads") && "#000"} />
          Leads
        </Link>
        <Link
          className={
            pathname?.includes("settings")
              ? "w-full h-14 px-8 flex items-center gap-2 bg-white text-black font-medium transition-colors rounded-r-lg"
              : "w-full h-14 px-8 flex items-center gap-2 text-gray hover:bg-white/50 transition-colors cursor-pointer rounded-r-lg"
          }
          href="/user/settings/contact-info"
          prefetch={true}
        >
          <SettingsIcon color={pathname?.includes("settings") && "#000"} />
          Settings
        </Link>
        <button
          className="w-full h-14 px-8 flex items-center gap-2 text-gray hover:bg-white/50 transition-colors cursor-pointer rounded-r-lg"
          onClick={handleLogout}
        >
          <Image
            alt=""
            width={24}
            height={24}
            src={"/assets/icons/logout.svg"}
          />
          Logout
        </button>
      </div>

      <div className="w-full px-8 my-[124px] flex-1 flex flex-col justify-end">
        <div className="w-full h-[130px] rounded-2xl bg-white shrink-0">
          <div className="text-sm font-normal leading-[140%] py-4 px-6">{currentPlan}</div>
          <div className="w-full h-px bg-border mb-4"></div>
          <button
          onClick={() => setOpen(true)}
          className="primary-button max-w-fit px-4 mx-auto"
          >
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/lightning.svg"}
            />
            Upgrade plan
          </button>
        </div>
      </div>

      <div className="w-full px-8 flex items-center gap-2 shrink-0">
        <div className="font-medium text-white min-w-[32px] h-8 flex items-center justify-center rounded-full bg-primary">{userInfo?.user?.fname?.split('')[0]}</div>
        <div>
          <div className="font-medium mb-1"> {userInfo?.user?.fname} {userInfo?.user?.lname}</div>
          <div className="text-xs font-normal text-gray">
            {userInfo?.user?.email}
          </div>
        </div>
      </div>

      <UpgradeModal open={open} setOpen={setOpen} />
    </div>
  );
}
