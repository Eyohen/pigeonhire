"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    // const nextBtn = document.querySelector(
    //   ".compliance__title__svg-group__next"
    // );
    const prevBtn = document.querySelector(
      ".landing__testimonials__inner__prev"
    );
    const prevBtnMobile = document.querySelector(
      ".landing__testimonials__arrows-mobile__prev"
    );
    const nextBtnMobile = document.querySelector(
      ".landing__testimonials__arrows-mobile__next"
    );
    const slider = document.querySelector(".landing__testimonials__inner__cards");
    const card = document.querySelector(".landing__testimonials__inner__cards__card");
    let itemDimensions = card.getBoundingClientRect();
    let amountToSlide = (itemDimensions.width + 16);

    // nextBtn.addEventListener("click", () => {
    //   slider.scrollLeft += amountToSlide;
      
    // });

    prevBtn.addEventListener("click", () => {
      slider.scrollLeft -= amountToSlide;
    });

    prevBtnMobile.addEventListener("click", () => {
      slider.scrollLeft -= amountToSlide;
    });
    nextBtnMobile.addEventListener("click", () => {
      slider.scrollLeft += amountToSlide;
    });
  }, []);

  return (
    // <div className="mt-16 mb-16">
    //   <p className="text-center font-semibold text-7xl p-8">User's Stories</p>
    //   <div className="hidden w-full items-center gap-2 justify-end px-6 mb-2">
    //     <Image
    //       alt=""
    //       width={16}
    //       height={16}
    //       src={"/assets/icons/arrowLeft.svg"}
    //       className="landing__testimonials__arrows-mobile__prev cursor-pointer"
    //       />
    //     <Image
    //       alt=""
    //       width={16}
    //       height={16}
    //       src={"/assets/icons/arrowRightReal.svg"}
    //       className="landing__testimonials__arrows-mobile__next cursor-pointer"
    //       />
    //   </div>
    //   <div className="w-full max-w-[1352px] px-5 mx-auto flex items-center gap-4">
    //     <Image
    //       alt=""
    //       width={32}
    //       height={32}
    //       src={"/assets/icons/arrowLeft.svg"}
    //       className="landing__testimonials__inner__prev cursor-pointer phone:hidden"
    //     />
    //     <div className="landing__testimonials__inner__cards flex gap-6 overflow-x-auto scroll-smooth">
    //       <div className="landing__testimonials__inner__cards__card min-w-[557px] w-[557px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px] phone:min-w-[253px] phone:w-[253px] phone:h-[211px] phone:p-4">
    //         <div className="font-semibold flex items-center justify-between mb-12">
    //           <div>Gwala</div>

    //           <Image
    //             alt=""
    //             width={32}
    //             height={32}
    //             src={"/assets/icons/quote.svg"}
    //             className=""
    //           />
    //         </div>

    //         <div className="font-medium text-gray leading-[140%]">
    //           Our partnership with Pigeonhire during our campus ambassador
    //           program was a game-changer. The access to a range of communities
    //           and connectors resulted in unprecedented engagement and sales.
    //         </div>
    //       </div>
    //       <div className="landing__testimonials__inner__cards__card min-w-[557px] w-[557px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px] phone:min-w-[253px] phone:w-[253px] phone:h-[211px] phone:p-4">
    //         <div className="font-semibold flex items-center justify-between mb-12">
    //           <div>Alex Klaxic</div>

    //           <Image
    //             alt=""
    //             width={32}
    //             height={32}
    //             src={"/assets/icons/quote.svg"}
    //             className=""
    //           />
    //         </div>

    //         <div className="font-medium text-gray leading-[140%]">
    //           As a community leader, the visibility model has been
    //           transformative. We've partnered with businesses that truly
    //           resonate with our audience, enhancing both our community's value
    //           and our collaboration
    //         </div>
    //       </div>
    //       <div className="landing__testimonials__inner__cards__card min-w-[557px] w-[557px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px] phone:min-w-[253px] phone:w-[253px] phone:h-[211px] phone:p-4">
    //         <div className="font-semibold flex items-center justify-between mb-12">
    //           <div>Studendly</div>

    //           <Image
    //             alt=""
    //             width={32}
    //             height={32}
    //             src={"/assets/icons/quote.svg"}
    //             className=""
    //           />
    //         </div>

    //         <div className="font-medium text-gray leading-[140%]">
    //          All I can say is wow. Thanks to the Pigeonhire team for exceeding our goal not just in user acquisition but in conversion. Our previous experience with another company resulted in vanity user acquisition. So this is quite refreshing.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="mt-16 mb-16">
      <p className="text-center font-semibold text-7xl p-8">User's Stories</p>
      <div className="hidden w-full items-center gap-2 justify-end px-6 mb-2">
        <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowLeft.svg"}
          className="landing__testimonials__arrows-mobile__prev cursor-pointer"
          />
        <Image
          alt=""
          width={16}
          height={16}
          src={"/assets/icons/arrowRightReal.svg"}
          className="landing__testimonials__arrows-mobile__next cursor-pointer"
          />
      </div>
      <div className="w-full max-w-[1352px] px-5 mx-auto flex items-center gap-4">
        <Image
          alt=""
          width={32}
          height={32}
          src={"/assets/icons/arrowLeft.svg"}
          className="landing__testimonials__inner__prev cursor-pointer phone:hidden"
        />
        <div className="landing__testimonials__inner__cards flex gap-6 overflow-x-auto scroll-smooth">
          <div className="landing__testimonials__inner__cards__card min-w-[500px] w-[500px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px]">
            <div className="font-semibold flex items-center justify-between mb-12">
              <div>Gwala</div>

              <Image
                alt=""
                width={32}
                height={32}
                src={"/assets/icons/quote.svg"}
                className=""
              />
            </div>

            <div className="font-medium text-gray leading-[140%]">
              Our partnership with Pigeonhire during our campus ambassador
              program was a game-changer. The access to a range of communities
              and connectors resulted in unprecedented engagement and sales.
            </div>
          </div>
          <div className="landing__testimonials__inner__cards__card min-w-[500px] w-[500px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px]">
            <div className="font-semibold flex items-center justify-between mb-12">
              <div>Alex Klaxic</div>

              <Image
                alt=""
                width={32}
                height={32}
                src={"/assets/icons/quote.svg"}
                className=""
              />
            </div>

            <div className="font-medium text-gray leading-[140%]">
              As a community leader, the visibility model has been
              transformative. We've partnered with businesses that truly
              resonate with our audience, enhancing both our community's value
              and our collaboration
            </div>
          </div>
          <div className="landing__testimonials__inner__cards__card min-w-[500px] w-[500px] h-[273px] bg-[#fff9f2] rounded-2xl p-[51px_32px] ">
            <div className="font-semibold flex items-center justify-between mb-12">
              <div>Studendly</div>

              <Image
                alt=""
                width={32}
                height={32}
                src={"/assets/icons/quote.svg"}
                className=""
              />
            </div>

            <div className="font-medium text-gray leading-[140%]">
             All I can say is wow. Thanks to the Pigeonhire team for exceeding our goal not just in user acquisition but in conversion. Our previous experience with another company resulted in vanity user acquisition. So this is quite refreshing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
