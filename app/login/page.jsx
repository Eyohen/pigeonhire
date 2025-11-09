import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/loginForm";

export default function Register() {
  return (
    <div className="w-full max-w-[1440px] px-16 py-12 mx-auto grid grid-cols-2 gap-[69px]">
      <div>
        <Image
          alt=""
          className="mb-16"
          width={240}
          height={48}
          src={"/assets/icons/logo.svg"}
        />

        <div className="text-[32px] font-semibold mb-4 text-center">
          Welcome back to Pigeonhire
        </div>
        <div className="text-lg font-normal text-[#8d8d8d] mb-8 text-center">
          Log in to continue discover, connect, and convert leads.{" "}
        </div>
        <LoginForm />
        <div className="flex justify-between">
          <div className="text-sm font-normal leading-[140%] text-[#8d8d8d]">
            © 2025 Pigeonhire Inc. All Right Reserved.
          </div>
          <div className="flex gap-2 font-medium whitespace-nowrap items-center">
            <div>Privacy Policy</div>
            <Image alt="" src={"/assets/icons/dot.svg"} width={8} height={8} />
            <div>Terms & Condition</div>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-[url('/assets/auth.png')] bg-cover bg-no-repeat bg-center rounded-[14px]"></div>

      <div className="hidden max-[768px]:flex fixed top-0 left-0 w-full h-full justify-center items-center bg-white text-[28px] font-semibold">
        View on desktop for better experience
      </div>
    </div>
  );
}
