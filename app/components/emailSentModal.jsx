import Image from "next/image";
import Link from "next/link";

export default function EmailSentModal({open, setOpen}) {
  return (
    open &&
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/[0.17]">
      <div className="w-full max-w-[466px] h-[306px] px-8 py-6 bg-white rounded-[15px]">
        <div className="mb-6 flex justify-end">
          <Image alt="" src={"/assets/icons/close.svg"} width={24} height={24} />
        </div>

        <div className="mb-4 mx-auto w-fit">
          <Image alt="" src={"/assets/icons/correct.svg"} width={42} height={42} />
        </div>

        <div className="text-2xl text-center mb-4">
          Confirmation Code Sent!
        </div>
        <div className="text-sm text-center text-[#808080] mx-auto mb-6 w-full max-w-[34ch] leading-[140%]">
          A four (4) digit code has been sent to your registered email address
        </div>

        <Link href="/verify-forgot-password"> <button className="primary-button">Continue</button></Link>
      </div>
    </div>
  );
}
