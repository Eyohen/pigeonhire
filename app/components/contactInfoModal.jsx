import Image from "next/image";

export default function ContactInfoModal({open, setOpen}) {
  return (
    open &&
    <div className="w-full h-screen fixed top-0 left-0 bg-black/40 flex justify-center items-center">
      <div className="w-full max-w-[520px] min-h-[153px] bg-white rounded-lg pb-[39px]">
        <div className="pt-[25px] pb-[17px] border-b border-[#E5E5E5] px-6 flex items-center justify-between mb-6">
          <div>Contact Information</div>

          <Image
            alt=""
            width={24}
            height={24}
            src={"/assets/icons/close.svg"}
            onClick={() => setOpen(false)}
            className="pointer"
          />
        </div>

        <div className="grid grid-cols-2 justify-between items-center px-6 gap-y-6 [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:text-right">
          <div>Email</div>
          <div>Folaagoro@gmail.com</div>
          <div>Phone number</div>
          <div>+351 20578902</div>
          <div>LinkedIn:</div>
          <div>URL</div>
          <div>Instagram:</div>
          <div>URL</div>
          <div>X:</div>
          <div>URL</div>
          <div>WhatsApp:</div>
          <div>URL</div>
          <div>Other:</div>
          <div>URL</div>
        </div>
      </div>
    </div>
  );
}
