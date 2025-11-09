import Image from "next/image";
import LandingHeader from "../components/landingHeader";
import Footer from "../components/footer";
import PricingInner from "../components/pricingInner";

export default function Pricing() {
  return (
    <div>
      <LandingHeader />

     <div className="max-w-[1351px] px-5 py-20 pb-[129px] mx-auto md:px-3 md:py-[60px] md:pb-[57px]">
     <div className="title-56 font-semibold w-full max-w-[20ch] mb-16 leading-[78px] tracking-[-0.02em] md:text-[28px] md:leading-[42px] md:mb-8">
        We've got a plan a perfect plan for you
      </div>
      <PricingInner />
     </div>

     <Footer />
    </div>
  );
}
