import React from "react";
import Navbar from "../components/Navbar";
import { PiCheckCircleDuotone } from "react-icons/pi";
import check from "../assets/orangecheck.png";
import close from "../assets/landingpage/close.svg"
import Footer from "../components/footer";


const Pricing = () => {
  return (
    <>
    <div className="bg-gray-100 font-nunito">
      <Navbar />

      <div className="bg-[#FAD5A5] py-12 mt-16 ">
        <p className="text-6xl font-semibold text-center">
          Pricing and Plans
        </p>
      </div>

      <div className="grid grid-cols-2 mt-12 gap-x-24 gap-y-12 px-[120px]">
        <div>
          <div className="bg-[#201327] py-2 px-24"></div>
          <div className="shadow-xl px-[120px] py-2">
            <p className="text-2xl font-semibold text-center">
              To Explore Communities
            </p>
            <p className="text-lg text-center">Subscribe</p>
          </div>
        </div>

        <div>
          <div className="bg-[#201327] py-2 px-24"></div>
          <div className="shadow-xl bg-[#F3D8A7] px-[120px] py-2">
            <p className="text-2xl font-semibold text-center">
              Find Community Owners
            </p>
            <p className="text-lg text-center">Pay-as-you-Go</p>
          </div>
        </div>

        <div>
          <div className="bg-[#FFE5B4] py-6 px-24">
            <p className="text-2xl font-medium text-center">Essentials</p>
            <p className="text-lg text-center">Monthly</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              $4.99
            </p>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Perfect for users needing flexibility or those testing the
                platform's capabilities
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Unlimited access to the full database.
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Full database access with intelligent matchmaking and insights
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={close} className="w-6 h-6" />
              <p className="text-lg mt-4">Save 0% per month</p>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#A9A9A9] py-6 px-24">
            <p className="text-2xl font-medium text-center">Pro</p>
            <p className="text-lg text-center">6 Months Subscription</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              $23.95
            </p>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Perfect for users needing flexibility or those testing the
                platform's capabilities
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Unlimited access to the full database.
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Full database access with intelligent matchmaking and insights
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Save 15% per month</p>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#FFE5B4] py-6 px-24">
            <p className="text-2xl font-medium text-center">Premier</p>
            <p className="text-lg text-center">1 year Subscription</p>
          </div>
          <div className="shadow-xl px-[20px] py-6">
            <p className="text-2xl font-semibold text-center">
              $41.92
            </p>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Perfect for users needing flexibility or those testing the
                platform's capabilities
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Unlimited access to the full database.
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">
                Full database access with intelligent matchmaking and insights
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Vetted connections</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Quality ratings</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Advanced search</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={check} className="w-6 h-6" />
              <p className="text-lg mt-4">Save 30% per month</p>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-[#F08E1F] w-[400px] text-white rounded-full px-6 py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24"></div>
    </div>
    <Footer/></>
  );
};

export default Pricing;
