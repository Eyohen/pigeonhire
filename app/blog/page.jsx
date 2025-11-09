import Image from "next/image";
import LandingHeader from "../components/landingHeader";
import BlogCard from "../components/blogCard";
import Footer from "../components/footer";
import ArticleCard from "../components/articleCard";

export default function Blogs() {
  return (
    <div className="blogs">
      <LandingHeader />
      <div className="w-full max-w-[1352px] px-5 mx-auto py-20">
        <div className="w-full max-w-[1352px] px-5 mx-auto flex items-center justify-between mb-8">
          <div className="text-[56px] font-semibold">Blog</div>
          <div className="text-lg w-full max-w-[40ch] text-[#8D8D8D] leading-[140%]">
            Insights, stories, and strategies to help you connect, grow, and
            thrive in today's networked world.
          </div>
        </div>

        <div className="w-full max-w-[497px] h-[50px] border border-[#E5E5E5] flex items-center mb-16 rounded-[28px]">
          <input type="text" placeholder="Enter your email" className="w-full h-full border-none bg-transparent pl-4" />
          <button className="w-full max-w-[133px] h-[50px] flex items-center justify-center gap-2.5 bg-[#df7c0d] rounded-[28px] font-medium text-lg text-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)_inset] border-none phone:w-[120px] phone:text-[11px] phone:h-8">Subscribe</button>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-16 mb-16">
          <BlogCard image={"/assets/blog1.png"} />
          <BlogCard image={"/assets/blog2.png"} />
          <BlogCard image={"/assets/blog1.png"} />
          <BlogCard image={"/assets/blog2.png"} />
        </div>

        <div className="text-2xl font-semibold mb-6 flex items-center justify-between">
          <div>Articles</div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/outlineLeftArrow.svg"}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/outlineRightArrow.svg"}
            />
          </div>
        </div>

        <div className="flex items-center gap-[25px] overflow-x-auto">
          <ArticleCard
            title={"Mistakes Brands Make When Approaching Online Communities"}
            subtitle={
              "Before you post or pitch, read this. These common missteps can make or break your brand's relationship with online groups."
            }
          />
          <ArticleCard
            title={
              "Pigeonhire Behind the Scenes: Building a Community-First Platform"
            }
            subtitle={
              "A transparent look at how Pigeonhire is designed with real user needs, discovery behavior, and trust at its core."
            }
          />
          <ArticleCard
            title={"Community-Led vs. Product-Led Growth: Which Wins?"}
            subtitle={
              "Discover the difference between these two growth strategies and why community-led might be the smarter choice."
            }
          />
           <ArticleCard
            title={"Mistakes Brands Make When Approaching Online Communities"}
            subtitle={
              "Before you post or pitch, read this. These common missteps can make or break your brand's relationship with online groups."
            }
          />
          <ArticleCard
            title={
              "Pigeonhire Behind the Scenes: Building a Community-First Platform"
            }
            subtitle={
              "A transparent look at how Pigeonhire is designed with real user needs, discovery behavior, and trust at its core."
            }
          />
          <ArticleCard
            title={"Community-Led vs. Product-Led Growth: Which Wins?"}
            subtitle={
              "Discover the difference between these two growth strategies and why community-led might be the smarter choice."
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
