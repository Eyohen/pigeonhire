import Image from "next/image";
import Connect from "../components/connect";
import LandingHeader from "../components/landingHeader";
import Reach from "../components/reach";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="bg-[#13100A]">
      <LandingHeader logo={"black"} />

      <div className="font-semibold leading-[140%] mb-2 text-center text-white mt-20 md:text-[28px] md:mb-4 md:mt-[60px] text-7xl">About Us</div>
      <div className="title-24 font-normal mb-[128px] text-center text-white md:w-full md:max-w-[30ch] md:mx-auto md:text-base md:font-semibold md:mb-[100px] md:leading-[140%]">
        Connecting innovators with engaged communities for lasting impact.
      </div>

      <div className="relative bg-white pt-[238px] pb-16 px-5 md:pb-8">
        <div className="w-full absolute left-1/2 top-[-40px] -translate-x-1/2 max-w-[1163px] px-5 mx-auto grid grid-cols-3 gap-8 mb-16 -mt-10 md:mb-0 md:-mt-5 md:gap-2 md:px-3">
          <Image alt="" width={353} height={260} src={"/assets/about1.png"} className="w-full h-auto rounded-2xl md:rounded-[5.44px]" />
          <Image alt="" width={353} height={260} src={"/assets/about2.png"} className="w-full h-auto rounded-2xl md:rounded-[5.44px]" />
          <Image alt="" width={353} height={260} src={"/assets/about3.png"} className="w-full h-auto rounded-2xl md:rounded-[5.44px]" />
        </div>

        <div className="title-48 w-full max-w-[1312px] mx-auto font-semibold mb-12 text-center lg:-mt-[100px] md:-mt-[168px] md:text-base md:mb-2 md:text-left">
          Bridging Connections, Driving Growth
        </div>
        <div className="title-18 max-w-[1312px] mx-auto flex justify-between items-center text-[#8D8D8D] leading-[140%] gap-5 md:flex-col md:text-sm md:gap-2">
          <div className="w-full max-w-[58ch]">
            In today's digital world, many brands, marketers, and startups have
            great ideas but struggle to reach their audience. Pigeonhire bridges
            this gap by connecting them with engaged communities, to foster
            authentic connections for lasting growth.
          </div>
          <div className="w-full max-w-[47.5ch]">
            At Pigeonhire, we understand the power of connection and the need to
            engage audiences where they are most active. Our platform fosters
            authentic interactions, aligning businesses and personal brands with
            vibrant communities.
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-16 px-5 md:py-6 md:px-3">
        <div className="title-48 font-semibold text-secondary text-center mb-[42px] md:text-base md:mb-4">Our Story</div>
        <div className="title-24 w-full max-w-[1040px] mx-auto font-normal text-center leading-[140%] mb-6 md:text-sm md:mb-4">
          When I started Pigeonhire, my vision was to create a world where
          businesses and communities interact but are genuinely connected, where
          the power of human engagement drives innovation and growth. Our
          platform is built on the belief that in the heart of every community
          lies untapped potential and, in every business, a desire to make a
          real difference. I invite you to join us on this exciting journey.
          <br />
          <br />
          Together, let's build connections and a web of relationships that
          inspire change, drive progress, and celebrate the power of unity
        </div>
        <div>
          <div className="title-32 font-semibold leading-[140%] mb-2 text-center md:text-base md:mb-2">Temi R</div>
          <div className="title-18 font-normal leading-[140%] text-[#8D8D8D] text-center md:text-xs">Co-Founder, Pigeonhire</div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-8">
       <div className="w-full max-w-[1352px] px-5 flex justify-center gap-5 items-center mx-auto lg:flex-col lg:items-center lg:justify-center md:px-3">
       <Image alt="" width={733} height={512} src={"/assets/aboutwe.png"} className="w-full max-w-[733px] h-auto rounded-2xl md:rounded-none" />

<div className="title-24 w-full max-w-[34ch] font-normal leading-[140%] lg:text-center lg:max-w-full md:text-sm">
  We aim to revolutionize how businesses and communities interact,
  fostering an ecosystem where genuine relationships lead to shared
  success. We are committed to offering a platform where every
  interaction is an opportunity for growth, learning, and meaningful
  exchange.
</div>
       </div>
      </div>

      <div className="bg-white pb-16 md:pb-8">

        <div className="w-full max-w-[1165px] px-5 mx-auto md:px-3">

      <div className="title-48 font-semibold mb-[42px] text-center md:text-lg md:mb-6">
      The value we bring
        </div>
      <div className="grid grid-cols-3 gap-12 lg:grid-cols-1 md:gap-4">
      <div className="flex flex-col justify-center items-center">
         <Image
                  alt=""
                  width={82}
                  height={82}
                  src={"/assets/icons/community.svg"}
                  className="mb-6"
                />

                <div className="title-24 font-semibold mb-4 text-center md:text-base md:mb-2">
                Community-Centric
                </div>
                <div className="title-18 text-[#8D8D8D] leading-[140%] text-center w-full md:w-full md:max-w-[35ch] md:text-sm">
                We are passionate about building a platform where communities can thrive, and businesses can find their tribe.
                </div>
      </div>
      <div className="flex flex-col justify-center items-center">
         <Image
                  alt=""
                  width={82}
                  height={82}
                  src={"/assets/icons/growth.svg"}
                  className="mb-6"
                />

                <div className="title-24 font-semibold mb-4 text-center md:text-base md:mb-2">
                Growth
                </div>
                <div className="title-18 text-[#8D8D8D] leading-[140%] text-center w-full md:w-full md:max-w-[35ch] md:text-sm">
                We are dedicated to developing our users, communities, and platform, ensuring that every connection made on Pigeonhire is a step toward collective success.
                </div>
      </div>
      <div className="flex flex-col justify-center items-center">
         <Image
                  alt=""
                  width={82}
                  height={82}
                  src={"/assets/icons/authenticity.svg"}
                  className="mb-6"
                />

                <div className="title-24 font-semibold mb-4 text-center md:text-base md:mb-2">
                Authenticity
                </div>
                <div className="title-18 text-[#8D8D8D] leading-[140%] text-center w-full md:w-full md:max-w-[35ch] md:text-sm">
                We champion genuine interactions, believing authenticity is the cornerstone of meaningful engagement.
                </div>
      </div>
        </div>
        </div>

      </div>

      <Connect />

      <Reach />

      <Footer />
    </div>
  );
}
