import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
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
        Enter New Password
        </div>
<br />
<br />
        <form className="max-w-[496px] mx-auto">
          <label htmlFor="email">Password</label>

          <div className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-8">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter new password"
                        className="w-full border-none outline-none placeholder:text-sm placeholder:text-[#8d8d8d]"
                      />{" "}
                      <Image
                        alt=""
                        width={24}
                        height={24}
                        src={"/assets/icons/openedEye.svg"}
                      />
                    </div>
          <label htmlFor="email">Confirm Password</label>

          <div className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-8">
                      <input
                        type="password"
                        name="password"
                        className="w-full border-none outline-none placeholder:text-sm placeholder:text-[#8d8d8d]"
                      />{" "}
                      <Image
                        alt=""
                        width={24}
                        height={24}
                        src={"/assets/icons/openedEye.svg"}
                      />
                    </div>

          <button className="w-full max-w-[599px] h-[50px] flex items-center justify-center gap-2.5 bg-[#df7c0d] rounded-[28px] font-medium text-lg text-white shadow-[0px_2px_8px_0px_#00000040_inset] border-none mb-6">Continue</button>

        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
