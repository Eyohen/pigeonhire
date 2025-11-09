import Image from "next/image";
import LandingHeader from "./components/landingHeader";
import Footer from "./components/footer";
import Connect from "./components/connect";
import Socials from "./components/socials";
import Link from "next/link";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import FlippedCards from "./components/flippedCards";
import { HomeHero } from "./components/homeHero";
import rectangle from "../public/assets/rectangle.png"
import vector from "../public/assets/Vector.png"

export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy",
  };
}

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <HomeHero />

      <Socials />

      {/* Get Started Section */}
      <div className="w-full max-w-[1352px] px-5 phone:px-12 mx-auto mb-32 phone:mb-128">
        {/* <div className="title-48 font-semibold mb-12 phone:mb-48 text-center phone:text-[16px]">Get started in 3 steps</div> */}
        <p className="text-center font-semibold text-7xl p-10">Get started in 3 steps</p>
        <div className="grid grid-cols-1 phone:grid-cols-2 tablet-pro:grid-cols-3 gap-6">
          <div className="w-full border border-border rounded-lg overflow-hidden transition-all duration-400 cursor-pointer hover:border-[#007aff] hover:shadow-[0px_2px_12px_0px_#007aff1a_inset,0px_-2px_12px_0px_#007aff1a_inset]">
            <div className="relative w-full flex items-end justify-center bg-gray-light -z-10 h-[181px] shadow-[0px_2px_16px_0px_#2525251a]">
              <Image
                alt=""
                width={240}
                height={235}
                src={"/assets/step1.png"}
                style={{ marginBottom: "-95px" }}
              />
            </div>
            <div className="title-24 font-semibold py-8 px-4 phone:px-[22px] bg-white z-10 phone:text-[16px] phone:pb-2">
              Browse & Discover
            </div>
            <div className="title-18 font-normal leading-[140%] px-4 phone:px-[22px] pb-8 phone:pb-4 bg-white text-gray z-10 phone:text-[14px]">
              Use our platform to explore a wide range of connections, including
              communities, real stores, connectors, service providers, event
              organizers, and more, all aligned with your personal or business
              goals
            </div>
          </div>
          <div className="w-full border border-border rounded-lg overflow-hidden transition-all duration-400 cursor-pointer hover:border-[#f6911f] hover:shadow-[0px_2px_12px_0px_#f6911f1a_inset,0px_-2px_12px_0px_#f6911f1a_inset]">
            <div className="relative w-full flex items-end justify-center bg-gray-light -z-10 h-[181px] shadow-[0px_2px_16px_0px_#2525251a]">
              <Image
                alt=""
                width={240}
                height={240}
                src={"/assets/step2.png"}
                style={{ marginBottom: "-96px" }}
              />
            </div>
            <div className="title-24 font-semibold py-8 px-4 phone:px-[22px] bg-white z-10 phone:text-[16px] phone:pb-2">
              Sign up & Subscribe
            </div>
            <div className="title-18 font-normal leading-[140%] px-4 phone:px-[22px] pb-8 phone:pb-4 bg-white text-gray z-10 phone:text-[14px]">
              With a single subscription, unlock access to diverse communities
              and key individuals like influencers, educational, leaders,
              startup managers, and local business association heads.
            </div>
          </div>
          <div className="w-full border border-border rounded-lg overflow-hidden transition-all duration-400 cursor-pointer hover:border-[#1c871b] hover:shadow-[0px_2px_12px_0px_#1c871b1a_inset,0px_-2px_12px_0px_#1c871b1a_inset]">
            <div className="relative w-full flex items-end justify-center bg-gray-light -z-10 h-[181px] shadow-[0px_2px_16px_0px_#2525251a]">
              <Image
                alt=""
                width={240}
                height={250}
                src={"/assets/step3.png"}
                style={{ marginBottom: "-100px" }}
              />
            </div>
            <div className="title-24 font-semibold py-8 px-4 phone:px-[22px] bg-white z-10 phone:text-[16px] phone:pb-2">
              Engage, Network & Collaborate
            </div>
            <div className="title-18 font-normal leading-[140%] px-4 phone:px-[22px] pb-8 phone:pb-4 bg-white text-gray z-10 phone:text-[14px]">
              Connect with your target audience, brand ambassadors, referral
              partners or marketing collaborators to start meaningful
              collaborations expand your each and achieve your goals.
            </div>
          </div>
        </div>
      </div>


      {/* Done-For-You Section */}
      {/* <div className="relative w-full max-w-[1352px] h-[400px] mx-auto mb-32 phone:mb-128 px-5 flex">
        <img src="/assets/rectangle.png" className="w-full h-full block object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left px-12">
          <h1 className="text-white font-normal mb-6 ">Explore our Done-For-You service</h1>
          <p className="text-5xl text-white font-bold mb-6">We find, connect and convert for you</p>
          <p className="text-white font-normal max-w-[700px] leading-[140%] mb-6">Think of our Done-For-You service as an outsourced team working as your in-house outreach experts. We'll handle the planning, connecting, and collaboration to get your brand, service, or mission to the right audience—quickly and effectively. Our strategy blends SEO, social media, and targeted outreach with curated connection lists, ongoing relationship management, and detailed progress reporting, all backed by data-driven insights for continuous growth. </p>
          <Link href="/contact" className="bg-white px-4 py-2 rounded-full"><button className="text-2xl bg-white text-secondary border border-[#F6911F] rounded-full px-4 py-5 font-medium cursor-pointer">Get your Personalised plan</button></Link>
        </div>
          <img src="/assets/Vector.png" className="w-24 h-24 block object-cover" />
      </div> */}
      <div className="relative w-full max-w-[1352px] h-[400px] mx-auto mb-32 phone:mb-128 px-5 flex">
  <img src="/assets/rectangle.png" className="w-full h-full block object-cover" />
  
  {/* Vector image - positioned at top right */}
  <img 
    src="/assets/Vector.png" 
    className="absolute top-1 right-0 w-[410px] h-[400px] block object-cover z-10" 
  />
  
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-left px-12">
    <h1 className="text-white font-normal mb-6">Explore our Done-For-You service</h1>
    <p className="text-5xl text-white font-bold mb-6">We find, connect and convert for you</p>
    <p className="text-white font-normal max-w-[700px] leading-[140%] mb-6">
      Think of our Done-For-You service as an outsourced team working as your in-house outreach experts. We'll handle the planning, connecting, and collaboration to get your brand, service, or mission to the right audience—quickly and effectively. Our strategy blends SEO, social media, and targeted outreach with curated connection lists, ongoing relationship management, and detailed progress reporting, all backed by data-driven insights for continuous growth.
    </p>
    <Link href="/contact" className="bg-white px-4 py-2 rounded-full">
      <button className="text-2xl bg-white text-secondary border border-[#F6911F] rounded-full px-4 py-5 font-medium cursor-pointer">
        Get your Personalised plan
      </button>
    </Link>
  </div>
</div>

      <FlippedCards />

      {/* Stats Section */}
      <div className="w-full bg-gray-light py-8 px-5 phone:px-0 flex items-center justify-center">
        <div className="w-full max-w-[1067px] grid grid-cols-3 items-center px-3 phone:px-0">
          <div className="w-full">
            <div className="title-32 font-semibold mb-4 pl-[55px] phone:text-[18px] phone:pl-0 phone:text-center">10k+</div>
            <div className="title-18 font-normal text-gray phone:text-[12px] phone:text-center">
              Micro Communities
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center border-r border-l border-border">
            <div className="title-32 font-semibold mb-4 phone:text-[18px]">20+</div>
            <div className="title-18 font-normal text-gray phone:text-[12px] phone:text-center">
              Countries
            </div>
          </div>
          <div className="w-full text-right">
            <div className="title-32 font-semibold mb-4 pr-[55px] phone:text-[18px] phone:pr-0 phone:text-center">100+</div>
            <div className="title-18 font-normal text-gray phone:text-[12px] phone:text-center">
              Successful Campaigns
            </div>
          </div>
        </div>
      </div>


      {/* Why Section */}
      <div className="w-full max-w-[1352px] px-5 phone:px-12 mx-auto pt-16 phone:pt-8 phone:pb-6">
        {/* <div className="title-48 font-semibold text-center mb-12 phone:text-[18px] phone:mb-6">
          Why Pigeonhire is the right choice
        </div> */}
        <p className="text-7xl font-semibold text-center p-10">Why Pigeonhire is the right choice</p>

        <div className="grid grid-cols-1 tablet-pro:grid-cols-2 gap-6 mb-6">
          <div className="p-12 phone:p-4 rounded-2xl bg-[#fff9f2]">
            <Image
              alt=""
              width={42}
              height={42}
              src={"/assets/icons/globe.svg"}
            />
            <div className="title-24 font-semibold mt-8 phone:mt-2 mb-4 phone:mb-2 phone:text-[16px]">
              Expanded Reach
            </div>
            <div className="title-18 leading-[140%] text-gray phone:text-[14px]">
              Gain access to niche local groups and vast global communities.
              Connect with the right people, expand your impact, and grow your
              network effortlessly.
            </div>

            <Image
              alt=""
              width={540}
              height={384}
              src={"/assets/why1.png"}
              className="w-full h-auto mx-auto flex justify-center mt-8 phone:mt-4"
            />
          </div>
          <div className="p-12 phone:p-4 rounded-2xl bg-gray-light">
            <Image
              alt=""
              width={42}
              height={42}
              src={"/assets/icons/target.svg"}
            />
            <div className="title-24 font-semibold mt-8 phone:mt-2 mb-4 phone:mb-2 phone:text-[16px]">
              Smart Targeting & Engagement
            </div>
            <div className="title-18 leading-[140%] text-gray phone:text-[14px]">
              Leverage advanced targeting to reach your ideal audience while
              fostering real community engagement. Receive feedback, build
              relationships, and make meaningful connections.
            </div>

            <Image
              alt=""
              width={540}
              height={354}
              src={"/assets/why2.png"}
              className="w-full h-auto mx-auto flex justify-center mt-8 phone:mt-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-[1.7fr_1fr] gap-6 mb-6">
          <div className="p-12 phone:p-4 rounded-2xl bg-[#fcf6ff] flex tablet:flex-row flex-col items-start tablet:items-center gap-6 phone:pr-4 min-h-[458px]">
            <div>
              <Image
                alt=""
                width={42}
                height={42}
                src={"/assets/icons/justice.svg"}
              />
              <div className="title-24 font-semibold mt-8 phone:mt-2 mb-4 phone:mb-2 phone:text-[16px]">
                Flexible & Scalable Solutions
              </div>
              <div className="title-18 leading-[140%] text-gray phone:text-[14px]">
                Unlock unlimited opportunities with a single subscription.
                Connect seamlessly with communities and key individuals tailored
                to fit your goals and budget.
              </div>
            </div>

            <Image
              alt=""
              width={380}
              height={283}
              src={"/assets/why3.png"}
              className="phone:w-full phone:h-auto phone:mx-auto phone:flex phone:justify-center phone:mt-8"
            />
          </div>
          <div className="p-12 phone:p-4 rounded-2xl bg-[#f2fbff]">
            <Image
              alt=""
              width={42}
              height={42}
              src={"/assets/icons/connect.svg"}
            />
            <div className="title-24 font-semibold mt-8 phone:mt-2 mb-4 phone:mb-2 phone:text-[16px]">
              Broad Connections & Smart Search
            </div>
            <div className="title-18 leading-[140%] text-gray phone:text-[14px]">
              Connect with a diverse user base across industries while
              leveraging advanced search tools to find the perfect match
              efficiently.
            </div>

            <Image
              alt=""
              width={363}
              height={196.65}
              src={"/assets/why4.png"}
              className="mx-auto flex justify-center mt-4 w-full phone:w-full phone:h-auto phone:mt-8"
            />
          </div>
        </div>
      </div>

      <Connect />

      <Testimonials />

      <Faq />

      <Footer />
    </div>
  );
}
