import Image from "next/image";
import Link from "next/link";

export default function BlogCard({image}) {
    return (
         <Link href="/blog/1" className="w-full">
                  <div className="relative mb-8 rounded-[20px]">
                  <Image
                                alt=""
                                width={644}
                                height={413}
                                src={image}
                                className="w-full h-auto"
                              />
                    <div className="absolute bottom-0 left-0 w-full h-[104px] bg-gradient-to-r from-[rgba(229,229,229,0.6)] to-[rgba(143,143,143,0.6)] rounded-b-[20px] px-6 py-6 text-white">
                      <div className="flex justify-between items-center mb-3">
                        <div className="title-24 font-semibold">Ejemen Roluga</div>
                        <div className="title-18 font-medium">12 mins read</div>
                      </div>
                      <div className="title-18">
                        14 Apr 2025
                      </div>
                    </div>
                  </div>

                  <div className="title-24 font-semibold mb-4">
                  Updates and Features: What's New on Pigeonhire
                  </div>
                  <div className="title-18 font-normal text-[#8D8D8D] leading-[140%]">
                  We've been busy behind the scenes making Pigeonhire even better. In this post, we break down the latest updates, new features, and user improvements that... <span className="font-medium text-[#161616]">Read More</span>
                  </div>
                </Link>
    )
}