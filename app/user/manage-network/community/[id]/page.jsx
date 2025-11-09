import NavigationDirectory from "@/app/components/navigationDirectory";
import Image from "next/image";

export default function ManageNetworkDetails() {
  return (
      <div>
          <NavigationDirectory
                  links={[
                    {
                      name: "Home",
                      link: "/",
                    },
                    {
                      name: "Start entrepreneurship hub ",
                      link: "/",
                    },
                    {
                      name: "View",
                    },
                  ]}
                />

                <div className="w-full h-[136px] bg-[#FAFAFA] mb-4"></div>
<br />
                <div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
                <div>Name:</div>
<div>Startup & Entrepreneurship Hub</div>
<div>Description:</div>
<div>Connect with investors, founders & startup enthusiasts, get funding insights & networking opportunities. Helping founders, investors, and innovators connect and grow.</div>
<div>Category:</div>
<div>Business</div>
<div>Facilitator:</div>
<div>Adekoye Grace</div>
<div>Community size:</div>
<div>500</div>
<div>Location:</div>
<div>New York</div>
<div>Contact information:</div>
<div>+315</div>
</div>
<div className="w-full h-px bg-[#E5E5E5] my-6"></div>
<div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
<div>Connection type:</div>
<div>Startup and Entrepreneur Networks</div>
<div>Created:</div>
<div>21 Jan 2025</div>
<div>Price tag:</div>
<div> <Image
                      src={"/assets/icons/free.svg"}
                      width={55}
                      height={34}
                      alt=""
                    /></div>
<div>Communication platform:</div>
<div className="flex gap-2"><div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Facebook</div>
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Twitter</div>
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Telegram</div></div>
<div>Engagement level:</div>
<div>Active participation</div>
<div>Post frequency:</div>
<div className="flex gap-2">
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">7days/week</div>
</div>
</div>
<div className="w-full h-px bg-[#E5E5E5] my-6"></div>
<div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">

<div>Content shared:</div>
<div className="flex gap-2">
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Articles and blog posts</div>
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Discussion threads</div>
</div>
<div>Communities interest:</div>
<div>Entrepreneurship / Startups</div>
<div>Access requirements:</div>
<div>Membership fee</div>
<div>Link to community:</div>
<div>URL</div>
<div>Interaction type:</div>
<div className="flex gap-2">
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Growth</div>
<div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Networking</div>
</div>
<div>Special achievements:</div>
<div>24 awards</div>
<div>Additional services:</div>
<div>Exclusive content</div>
                </div>

      </div>
  )
}