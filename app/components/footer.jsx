import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#13100A] text-white p-0 m-0">
    <div className="w-full max-w-[1352px] mx-auto px-5 py-16 tablet-pro:px-3 tablet-pro:py-6">
      <div className="flex items-center justify-between mb-16">
       <Link href={"/"}>
       <Image
          alt=""
          width={250}
          height={50}
          src={"/assets/icons/logoBlack.svg"}
        />
       </Link>

        <nav className="flex items-center gap-8 text-2xl font-normal text-[#8D8D8D]">
          <Link href={"/about"} className="transition-colors duration-400 hover:text-white">About Us</Link>
          <Link href={"/blog"} className="transition-colors duration-400 hover:text-white">Blog</Link>
          <Link href={"/about#contact"} className="transition-colors duration-400 hover:text-white">Contact Us</Link>
          <Link href={"/pricing"} className="transition-colors duration-400 hover:text-white">Pricing</Link>
          <Link href={"/user"} className="transition-colors duration-400 hover:text-white">Explore Network</Link>
        </nav>

        <div className="flex items-center gap-6">
        <Image
          alt=""
          width={32}
          height={32}
          src={"/assets/icons/linkedInIcon.svg"}
        />
        <Image
          alt=""
          width={32}
          height={32}
          src={"/assets/icons/twitterIcon.svg"}
        />
        <Image
          alt=""
          width={32}
          height={32}
          src={"/assets/icons/facebookIcon.svg"}
        />

        </div>
      </div>

      <div className="flex items-center justify-between mb-12 gap-6">
        <div>
          <div className="text-4xl font-semibold mb-6">
            Contact Us
          </div>
          <div className="grid grid-cols-[76px_180px] gap-[15px] text-2xl font-normal leading-[140%]">
            <div>Email: </div>
            <div>info@pigeonhire.com</div>
            <div>Phone:</div>
            <div>111-222-3331</div>
            <div>Address:</div>
            <div>0987 Andrew St Sunset City, Windoor State </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#2a2722] flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[302px] h-[46px] text-2xl rounded-input border border-white bg-transparent pl-4 text-base text-white placeholder:text-white"
          />
          <button className="w-[201px] max-w-none h-[50px] flex items-center justify-center gap-2.5 bg-primary rounded-button font-medium text-2xl text-white shadow-button px-[57px]">Subscribe</button>
        </div>
      </div>

      <div className="w-full h-[70px] border-t border-white flex items-end justify-center gap-[60px] flex-wrap text-sm font-normal leading-[140%]">
        <div>© 2025 Pigeonhire limited. All Right Reserved.</div>

        <div className="flex items-center gap-2">
        <Link href={"/privacy-policy"} prefetch={true}>Privacy Policy</Link>
        <Image alt="" width={8} height={8} src={"/assets/icons/dot.svg"} />
        <Link href={"/terms"} prefetch={true}>Terms & Condition</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
