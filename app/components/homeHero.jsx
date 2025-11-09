"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";

export function HomeHero(params) {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    // Your initial settings remain the same
    // gsap.set(".landing__hero__inner__button-group", {
    //   y: "-300px",
    //   opacity: 0,
    // });
    // gsap.set(".landing__hero__inner__banner", {
    //   y: "100px",
    //   opacity: 0,
    // });
    // gsap.set(".landing__hero__inner__title__span1", {
    //     display: "block",
    //     y: "25px",
    //     opacity: 0,
    //     // clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0% 100%)"
    //     // Optional: slight vertical offset
    //   });
    // gsap.set(".landing__hero__inner__title__span2", {
    //     display: "block",
    //     y: "50px",
    //     opacity: 0
    //     // Optional: slight vertical offset
    //   });
    //   // Create a timeline
    //   // Animate text coming "forward" from behind
    //   tl.to(".landing__hero__inner__title", {
    //     scale: 1,
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: "back.out(1.7)" // Single bounce effect
    //   });
    // Create a timeline if you haven't already
    // tl.to('.landing__hero__inner__button-group', {
    //   y: "0",
    //   duration: 1.5,           // Add duration back in
    //   opacity: 1,
    //   ease: "back.out(2)" // Single bounce with back easing
    // })
    // tl.to('.landing__hero__inner__banner', {
    //   y: "0",
    //   duration: 1.5,           // Add duration back in
    //   opacity: 1,
    //   ease: "back.out(2)" // Single bounce with back easing
    // }, "-=1.2")
    // tl.to('.landing__hero__inner__title__span1', {
    //   y: "0",
    //   duration: 1.4,           // Add duration back in
    // //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    //   opacity: 1,
    // }, "-=1.6")
    // tl.to('.landing__hero__inner__title__span2', {
    //   y: "0",
    //   duration: 1.2,           // Add duration back in
    //   opacity: 1,
    // }, "-=1.6")
  }, []);
  return (
    <div className="relative pt-20 pb-12 bg-[#241301] overflow-hidden phone:pt-[60px] phone:pb-[18px]">
      <div className="w-full max-w-[1352px] px-5 mx-auto phone:px-3">
        <div className="title-56 w-full max-w-[1000px] text-center font-semibold leading-[140%] mx-auto mb-6 flex justify-center text-white phone:text-[28px]">
          {/* <div className="w-full max-w-[26ch] text-5xl relative phone:max-w-[20ch]">
            Reach your Target Audience, Right Where they Engage.
          </div> */}
        </div>
        <div className="text-center">
          <p className="text-7xl text-white font-semibold">Reach your Target Audience, Right</p>
          <p className="text-7xl text-white font-semibold pt-6">Where they Engage.</p>
        </div>
        <div className="mt-12 relative w-fit flex items-center justify-center py-2 px-4 rounded-[48px] gap-6 shadow-[0px_-2px_12px_2px_#bcbcbc1a,0px_2px_12px_2px_#bcbcbc1a] mx-auto bg-white z-[3] phone:mb-9">
          {/* <Link href="/register" prefetch={true} className="title-18 w-[201px] py-[13px] px-6 border border-secondary font-medium rounded-[24px] bg-transparent text-secondary whitespace-nowrap flex items-center justify-center phone:w-[120px] phone:text-[11px] phone:h-8">
            Sign Up
          </Link> */}
          <Link href="/register" prefetch={true} className="title-18 px-16 border border-secondary rounded-[24px] text-2xl max-w-[201px] py-[13px] whitespace-nowrap">
            Sign Up
          </Link>
          <Link href="/user" prefetch={true} className="primary-button max-w-[201px] py-[13px] px-9 whitespace-nowrap text-2xl">
            Browse Networks
          </Link>
        </div>
        {/* <div className="relative">
          <Image
            className="-mt-[140px] relative w-full h-auto z-[2] phone:hidden"
            alt=""
            width={1230.2078857421875}
            height={726.2468872070312}
            src={"/assets/home-cards.png"}
          />
          <Image
            className="hidden phone:block relative w-full h-auto z-[2]"
            alt=""
            width={339.34893798828125}
            height={217.29168701171875}
            src={"/assets/home-cards-mobile.png"}
          />
          <div className="absolute left-1/2 -translate-x-1/2 bg-white w-[2168px] h-[1112px] rounded-[50%] top-[65%] phone:top-[55%] phone:h-[653px] phone:w-[1151px]"></div>
        </div> */}
        <div className="relative max-w-[800px] mx-auto">
          <Image
            className="-mt-[140px] relative w-full h-auto z-[2] phone:hidden"
            alt=""
            width={1230.2078857421875}
            height={726.2468872070312}
            src={"/assets/home-cards.png"}

          />
          <Image
            className="hidden phone:block relative w-full h-auto z-[2]"
            alt=""
            width={339.34893798828125}
            height={217.29168701171875}
            src={"/assets/home-cards-mobile.png"}
         

          />
          <div className="absolute left-1/2 -translate-x-1/2 bg-white w-[2168px] h-[1112px] rounded-[50%] top-[65%]"></div>
        </div>
      </div>
    </div>
  );
}
