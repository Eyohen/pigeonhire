"use client";
import Image from "next/image";
import Link from "next/link";
import EmailSentModal from "../components/emailSentModal";
import { useState } from "react";
import { forgotPassword } from "../apis/auth";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await forgotPassword(email);
      console.log("forgotPassword", response);
      localStorage.setItem("resetToken", response?.data?.resetToken);
      setOpen(true);
    } catch (error) {
      console.log("Error creating community:", error);
      toast.error(
        error?.response?.data?.msg ||
          "Error creating community. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
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

        <div className="flex items-center gap-0.5 font-semibold text-[#0c1a13] mb-[34.5px] -mt-[19.5px]">
          <Image
            alt=""
            src="/assets/icons/backArrow.svg"
            width={24}
            height={24}
          />
          Back
        </div>

        <div className="text-[32px] font-semibold mb-4 text-center">Password Recovery</div>
        <div className="text-lg font-normal text-[#8d8d8d] mb-8 text-center">
          Kindly provide the email address linked to your account.{" "}
        </div>
        <form className="max-w-[496px] mx-auto" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>

          <div className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-8">
            <input
              type="email"
              name="email"
              placeholder="e.g John Doe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-none outline-none placeholder:text-sm placeholder:text-[#8d8d8d]"
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/email.svg"}
            />
          </div>

          <button className="w-full max-w-[599px] h-[50px] flex items-center justify-center gap-2.5 bg-[#df7c0d] rounded-[28px] font-medium text-lg text-white shadow-[0px_2px_8px_0px_#00000040_inset] border-none mb-6" disabled={loading}>{loading ? "Loading..." : "Continue"}</button>
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

      <EmailSentModal open={open} setOpen={setOpen} />

      <div className="hidden max-[768px]:flex fixed top-0 left-0 w-full h-full justify-center items-center bg-white text-[28px] font-semibold">
        View on desktop for better experience
      </div>
    </div>
  );
}
