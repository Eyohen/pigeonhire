"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FlippedCards() {
  const [isFlipped, setIsFlipped] = useState(null);

  useEffect(() => {
    console.log("isFlipped", isFlipped);
  }, [isFlipped]);

  return (
    <div className="w-full max-w-[1352px] px-5 phone:px-3 mx-auto mb-32 phone:mb-8">
      <div className="flex justify-between mb-6">
        <p className="text-center font-semibold text-7xl">What our users look like</p>
        <p className="text-gray max-w-[500px] text-3xl"> Our platform helps users discover diverse opportunities for
          collaborations and partnerships, connecting them to key contacts and
          enabling impactful engagements outside the platform.</p>
      </div>

      <div className="grid grid-cols-2 gap-9">
        <div
          className={`w-full [perspective:1000px] mt-[10px] h-[744px] phone:h-[240px]`}
          onMouseEnter={() => setIsFlipped(1)}
          onMouseLeave={() => setIsFlipped(null)}
        >
          <div className={`flip-card-inner relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] ${isFlipped === 1 ? '[transform:rotateY(180deg)]' : ''}`}>
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[18px] overflow-hidden">
              <Image
                alt=""
                width={693}
                height={744}
                src={"/assets/user1.png"}
                className="w-full h-auto rounded-[18px]"
              />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[18px] overflow-hidden [transform:rotateY(180deg)] flex items-center justify-center flex-col p-5 text-center text-white bg-[#8A3668]">
              <div className="title-24 font-semibold mb-8 phone:text-lg phone:mb-2">
              Powering Meaningful Connections
                </div>
              <div className="title-24 leading-[140%] font-normal phone:text-base">
              Connectors bridge the gap between communities and opportunities, linking like-minded individuals, businesses, and services for seamless engagement.
                </div>
            </div>
          </div>
        </div>
        <div
           className={`w-full [perspective:1000px] mt-[10px] h-[488px] phone:h-[240px]`}
          onMouseEnter={() => setIsFlipped(2)}
          onMouseLeave={() => setIsFlipped(null)}

        >
          <div className={`flip-card-inner relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] ${isFlipped === 2 ? '[transform:rotateY(180deg)]' : ''}`}>
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[18px] overflow-hidden">
              <Image
                alt=""
                width={595}
                height={488}
                src={"/assets/user2.png"}
                className="w-full h-auto rounded-[18px]"
              />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[18px] overflow-hidden [transform:rotateY(180deg)] flex items-center justify-center flex-col p-5 text-center text-white bg-[#46B953]">
                <div className="title-24 font-semibold mb-8 phone:text-lg phone:mb-2">
                Where Conversations Thrive
                </div>
                <div className="title-24 leading-[140%] font-normal phone:text-base">
                Communities bring people together around shared interests, fostering discussions, collaborations, and endless possibilities.
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
