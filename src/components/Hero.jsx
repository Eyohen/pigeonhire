import React from "react";
import herolady from "../assets/herolady.png";
import HeroBottom from "../assets/heroBottom.svg"

const Hero = () => {
  return (
    <>
    <div className="bg-[#201327] py-9 px-4 md:px-[120px]">
      <div className="flex justify-between">
        <div className="mt-16">
          <p className="text-white text-6xl font-bold font-nunito">
            Reach your Target
          </p>
          <p className="text-white text-6xl font-bold mt-2 font-nunito">
            Audience, Right Where
          </p>
          <p className="text-white text-6xl font-bold mt-2 font-nunito">
            they Engage.
          </p>

          <p className="text-white text-3xl font-medium mt-6 font-nunito">
            Thousands of businesses trust our platform to
          </p>
          <p className="text-white text-3xl mt-2 font-medium font-nunito">
            connect with users and secure partnerships in
          </p>
          <p className="text-white text-3xl mt-2  font-medium font-nunito">
            communities across 20+ countries
          </p>

          <div className="md:flex gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9">
            <div>
              <button className="bg-[#F08E1F] text-white rounded-full px-6 py-4">
                Browse Communities
              </button>
            </div>

            <div>
              <button className="border border-[#F08E1F] text-white rounded-full px-6 py-4">
                For Community users
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <img src={herolady} className="object-cover w-[450px] h-[500px]" />
        </div>
      </div>
    </div>
    <div className="bg-[#ffffff] p-8">
      <div>
        <div className="font-nunito font-semibold text-3xl text-center">Discover over 10,000 groups, stores, influencers, services, conveners on these platforms</div>
        <div>
          <img src={HeroBottom} alt = 'hero-bottom'/>
        </div>
      </div>

    </div>
    </>
  );
};

export default Hero;
