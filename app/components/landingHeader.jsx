"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LandingHeader({ logo }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false)

  return (
    <header className="relative w-full max-w-[1352px] mx-auto px-5 py-16 h-[114px] flex justify-between items-center tablet:h-14 tablet:bg-white">
      <Link href={"/"} prefetch={true}>
        <Image
          alt=""
          width={250}
          height={50}
          src={
            logo === "black"
              ? "/assets/icons/logoBlack.svg"
              : "/assets/icons/logo.svg"
          }
          className="tablet:hidden"
        />
        <Image
          alt=""
          width={250}
          height={50}
          src={"/assets/icons/logo.svg"}
          className="hidden tablet:block tablet:w-[114px] tablet:h-[22.8px]"
        />
      </Link>
      <nav className="title-18 font-medium text-[#8d8d8d] text-2xl hidden tablet:flex items-center gap-8">
        <Link
          href={"/about"}
          prefetch={true}
          className={pathname?.includes("about") ? "text-secondary" : ""}
        >
          About Us
        </Link>
        <Link
          href={"/pricing"}
          prefetch={true}
          className={pathname?.includes("pricing") ? "text-secondary" : ""}
        >
          Pricing
        </Link>
        <Link
          href={"/user"}
          prefetch={true}
          className={pathname?.includes("user") ? "text-secondary" : ""}
        >
          Networks
        </Link>
      </nav>
      <div className="hidden tablet:flex items-center gap-8">
        <Link href="/login" prefetch={true} className="font-medium text-secondary bg-none border-none underline">
          Login
        </Link>
        <Link href="/register" prefetch={true} className="primary-button w-fit h-12 px-8 whitespace-nowrap text-2xl py-6">
          Sign Up for free
        </Link>
      </div>

      <Image
        className="tablet:hidden cursor-pointer"
        alt=""
        width={24}
        height={24}
        src={active ? "/assets/icons/close.svg" : "/assets/icons/hamburger.svg"}
        onClick={() => setActive(!active)}
      />

      <div className={`absolute top-[50px] left-0 w-full bg-white px-0 pb-[72px] pl-3 z-10 transition-all duration-400 ${
        active ? "[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]" : "[clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
      }`}>
        <nav className="flex flex-col gap-6 mb-6 pt-[18px]">
          <Link
            href={"/about"}
            prefetch={true}
            className={`title-18 font-medium ${pathname?.includes("about") ? "text-secondary" : "text-[#8d8d8d]"}`}
          >
            About Us
          </Link>
          <Link
            href={"/pricing"}
            prefetch={true}
            className={`title-18 font-medium ${pathname?.includes("pricing") ? "text-secondary" : "text-[#8d8d8d]"}`}
          >
            Pricing
          </Link>
          <Link
            href={"/user"}
            prefetch={true}
            className={`title-18 font-medium ${pathname?.includes("user") ? "text-secondary" : "text-[#8d8d8d]"}`}
          >
            Networks
          </Link>
        </nav>

        <div className="relative w-fit flex items-center justify-center gap-4 mx-auto">
          <Link href="/login" className="title-18 w-[201px] py-[13px] px-6 bg-[#fff6eb] font-medium rounded-3xl text-secondary whitespace-nowrap flex items-center justify-center phone:w-[120px] phone:text-[11px] phone:h-8">Login</Link>
          <Link href="/register" className="primary-button max-w-[201px] py-[13px] px-6 whitespace-nowrap">Sign Up for free</Link>
        </div>
      </div>
    </header>
  );
}
