import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({title, subtitle}) {
    return (
      <Link href="/blog/1" className="w-[421px] min-w-[421px] rounded-2xl overflow-hidden border border-[#E5E5E5]">
      <Image
                                     alt=""
                                     width={421}
                                     height={203}
                                     src={"/assets/blog3.png"}
                                     className="w-full h-auto"
                                   />
     <div className="title-18 font-semibold mb-4 pt-4 px-4 pr-[22px] leading-[140%]">
      {title}
     </div>
     <div className="title-18 leading-[140%] mb-3 px-4 pr-[22px] text-[#8D8D8D]">
      {subtitle}
     </div>
     <div className="title-18 font-medium flex items-center gap-1 text-secondary pb-[23px] px-4 pr-[22px] leading-[140%]">
     Read
      <Image
                 alt=""
                 width={24}
                 height={24}
                 src={"/assets/icons/read.svg"}
               />
     </div>
 </Link>
    )
}