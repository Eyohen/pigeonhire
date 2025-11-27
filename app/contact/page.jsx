import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white pb-44 sm:pb-10" id="contact">
      <div className="w-full max-w-[926px] mx-auto px-5 sm:px-3">
        <div className="title-56 font-semibold mb-[42px] text-center py-16 sm:text-lg sm:mb-6 sm:py-0 sm:pt-8">Reach out to us</div>

        <form action="">
          <label htmlFor="fullName">Full name</label>
          <div className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded-input px-6 mb-8 sm:mb-4">
            <input type="text" name="fullName" placeholder="e.g John Doe" className="w-full border-none outline-none text-sm placeholder:text-gray" />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/user.svg"}
            />
          </div>

          <label htmlFor="email">Email address</label>

          <div className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded-input px-6 mb-8 sm:mb-4">
            <input type="email" name="email" placeholder="e.g John Doe" className="w-full border-none outline-none text-sm placeholder:text-gray" />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/email.svg"}
            />
          </div>
          <label htmlFor="email">Message</label>

          <textarea name="" id="" placeholder="enter your message" className="w-full border border-border h-[302px] rounded-lg px-6 pt-4 pb-4 mb-[30px] sm:mb-4"></textarea>

          <button className="primary-button max-w-full h-[73px] rounded-[48px] sm:w-full sm:h-8 sm:text-[11px] sm:shadow-none">Send message</button>
        </form>
      </div>
    </div>
  );
}
