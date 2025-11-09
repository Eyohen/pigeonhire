import ArticleCard from "@/app/components/articleCard";
import Footer from "@/app/components/footer";
import LandingHeader from "@/app/components/landingHeader";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="blog">
      <LandingHeader />
      <div className="w-full max-w-[1352px] px-5 mx-auto py-20">
        <div className="auth__form__back">
          <Image
            alt=""
            src="/assets/icons/backArrow.svg"
            width={24}
            height={24}
          />
          Back
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Image alt="" src="/assets/auth.png" width={64} height={64} className="rounded-full" />

          <div>
            <div className="text-2xl font-semibold mb-3">Ejemen Roluga</div>
            <div className="flex items-center gap-6">
              <div className="text-lg text-[#8D8D8D] flex items-center gap-2">
                <Image
                  alt=""
                  src="/assets/icons/clock.svg"
                  width={24}
                  height={24}
                />
                12 mins read
              </div>
              <div className="text-lg text-[#8D8D8D] flex items-center gap-2">
                <Image
                  alt=""
                  src="/assets/icons/calendar.svg"
                  width={24}
                  height={24}
                />
                14 Apr 2025
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <Image
            alt=""
            src="/assets/blog-banner.png"
            width={1312}
            height={491}
            className="w-full h-auto mx-auto mb-8"
          />

          <div className="mb-2">
            <h1 className="text-[32px] font-semibold mb-6">The Do's and Don'ts of Reaching Out to Connectors</h1>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">
            In a network-driven world, connectors are the bridges between your brand and your next big opportunity. Whether you're a startup, freelancer, or growing business, knowing how to reach out the right way can be the difference between being ignored—or embraced.
            Here's a quick guide to the do's and don'ts of reaching out to connectors on Pigeonhire or any other platform.
            </p>
            <h2 className="text-lg leading-[140%]">1. DO: Personalize Your Approach</h2>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">
            Nobody likes a cold, generic message. Take the time to understand who the connector is, what they care about, and what communities they're active in. A simple reference to something they've done or said goes a long way in showing that your message isn't just a copy-paste.
Instead of:
"Hey, I need help connecting with a few communities."
Try this:
"Hi [Name], I noticed you've been active in early-stage founder spaces. I'm working on a mental wellness platform for remote teams and would love to connect with similar communities through you."
🚫 DON'T: Lead With a Transaction
Connectors aren't sales reps they're people who curate relationships, trust, and value. If your first message is purely about what you want, you're likely to get scrolled past.
Avoid pushing your product or campaign upfront. Lead with mutual benefit, collaboration, or simply appreciation.
            </p>
            <h2 className="text-lg leading-[140%]">2. DO: Keep It Clear and Concise</h2>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">
            Your message doesn't have to be long to be effective. In fact, the shorter and more to the point it is, the easier it is for connectors to understand how they can help. A good rule of thumb? One short paragraph, one ask.
🚫 DON'T: Assume Immediate Results
Connectors often manage multiple conversations and communities. Don't be discouraged if they don't respond instantly. Instead of following up with pressure, follow up with patience or offer a way to make the process easier for them.
            </p>
            <h2 className="text-lg leading-[140%]">3. DO: Offer Value First</h2>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">
            Even if you're the one reaching out, ask yourself: How can I help this person, too? Maybe it's visibility, collaboration, a helpful resource, or a shoutout. Offering something small signals that you're here to build not just take.
🚫 DON'T: Ghost the Relationship
Even if the connector doesn't help you this time, thank them anyway. Stay connected. Relationships compound. Today's contact could be tomorrow's referral, partner, or even customer.
            </p>

            <h3 className="text-lg leading-[140%] underline">In Summary</h3>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">
            Connectors are at the heart of the Pigeonhire ecosystem. Treat them like real humans (because they are), lead with authenticity, and focus on building not begging.
If you approach it right, you won't just make a connection—you'll start a relationship that grows.
            </p>
            <p className="text-lg text-[#8D8D8D] leading-[140%] mb-4">Want to find the right connector for your next move?</p>
          </div>

          <div className="text-lg font-semibold text-[#F6911F] underline mb-16">
          Explore top connectors on Pigeonhire →
          </div>

          <div className="text-2xl font-semibold mb-6 flex items-center justify-between">
                    <div>Suggested for you</div>

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
