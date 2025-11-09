import Image from "next/image";

export default function DeleteModal({open, setOpen}) {
    return (
        open &&
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/[0.17]">
        <div className="w-full max-w-[278px] py-4 bg-white rounded-lg">
            <div className="flex items-center justify-between font-medium mb-2 px-4">
                <div>Delete community?</div>

                          <Image
                            alt=""
                            width={24}
                            height={24}
                            src={"/assets/icons/close.svg"}
                            onClick={() => setOpen(false)}
                            className="pointer"
                          />
            </div>

            <div className="text-sm text-[#8D8D8D] mb-6 px-4">
            This can't be undone
            </div>

            <div className="flex gap-2 items-center justify-end px-4 pt-6 border-t border-[#E5E5E5]">
                <button className="w-[82px] h-[33px] font-semibold border border-[#E5E5E5] rounded bg-transparent text-[#8D8D8D]">Cancel</button>
                <button
                onClick={() => setOpen(false)}
                className="w-[82px] h-[33px] font-semibold border border-[#E5E5E5] rounded bg-[#F6911F] text-white"
                >Delete</button>
            </div>
        </div>
        </div>
    )
}