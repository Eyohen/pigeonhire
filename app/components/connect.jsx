import Link from "next/link";

export default function Connect() {
    return (
         <div className="bg-gradient-to-r from-[#f6911f] to-[#905512] flex flex-col items-center justify-center">
                <div className="w-full max-w-[1352px] px-5 mx-auto py-[52px] text-white leading-[140%]">

                <div className="text-5xl text-center mb-4 leading-[140%]">
                  Pigeonhire connects people and organizations to growth leads.
                </div>
                <div className="w-full max-w-[70ch] font-medium text-center mx-auto mb-[42px]">
                  Join Pigeonhire today to easily access the right communities and key
                  contacts, expanding your reach and growing your network.
                </div>
                <div className="relative w-fit flex items-center justify-center py-2 px-4 rounded-[48px] gap-6 shadow-[0px_-2px_12px_2px_#bcbcbc1a,0px_2px_12px_2px_#bcbcbc1a] mx-auto bg-white">
          {/* <Link href="/register" prefetch={true} className="title-18 w-[201px] py-[13px] px-6 border border-secondary font-medium rounded-[24px] bg-transparent text-secondary whitespace-nowrap flex items-center justify-center phone:w-[120px] phone:text-[11px] phone:h-8">Sign Up</Link> */}
                 <Link href="/register" prefetch={true} className="text-secondary px-16 border border-secondary rounded-[24px] text-2xl max-w-[201px] py-[13px] whitespace-nowrap">
            Sign Up
          </Link>
          <Link href="/user" prefetch={true} className="primary-button max-w-[201px] py-[13px] px-6 text-2xl">Browse Networks</Link>
        </div>
                </div>
              </div>
    )
}