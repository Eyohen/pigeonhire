"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Socials() {
  const [duplicateCount, setDuplicateCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      url: "/assets/icons/slack.svg",
      width: isMobile ? 101.15789031982422 : 120,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/instagram.svg",
      width: isMobile ? 146.15789794921875 : 173,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/facebook.svg",
      width: isMobile ? 146.15789794921875 : 170,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/whatsapp.svg",
      width: isMobile ? 149.15789794921875 : 179,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/retailStore.svg",
      width: isMobile ? 160.15789794921875 : 190,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/linkedin.svg",
      width: isMobile ? 136.15789031982422 : 155,
      height: isMobile ? 40.421051025390625 : 48,
    },
    {
      url: "/assets/icons/reddit.svg",
      width: isMobile ? 105.15789794921875 : 132,
      height: isMobile ? 40.421051025390625 : 48,
    }
  ];

  useEffect(() => {
    const calculateDuplicates = () => {
      const viewportWidth = window.innerWidth;
      const itemWidth = 170; // Your item width
      const itemGap = 42;    // Gap between items
      const totalItemWidth = itemWidth + itemGap; // Total width each item occupies
      
      // Calculate how many items needed to fill viewport 3 times over, plus 1 extra
      const newDuplicateCount = Math.ceil((viewportWidth * 3) / totalItemWidth) + 1;
      setDuplicateCount(newDuplicateCount);
    };
  
    calculateDuplicates();
    window.addEventListener("resize", calculateDuplicates);
    return () => window.removeEventListener("resize", calculateDuplicates);
  }, []);

  const duplicatedItemsLeft = Array(duplicateCount).fill(images).flat();

  useEffect(() => {
    document.documentElement.style.setProperty('--item-count', images.length);
  }, [images.length]);


useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);




  return (
    <div className="w-full bg-[#fff9f2] py-[42px] mb-16 overflow-hidden scroll-smooth phone:py-6 phone:mb-8">
      {/* <div className="text-5xl font-semibold text-center mb-12 leading-[140%] phone:text-base phone:w-full phone:max-w-[30ch] phone:mx-auto phone:mb-[27px]">
        Discover thousands of Communities, Connectors and Businesses
      </div> */}
      <p className="font-semibold text-4xl text-center pb-8">Discover thousands of Communities, Connectors and Businesses</p>
      <div className="flex items-center justify-center gap-[42px] [animation:marqueeXLeft_45s_linear_infinite]">
        {duplicatedItemsLeft?.map((item, index) => (
          <Image
            alt=""
            width={item?.width}
            height={item?.height}
            src={item?.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
