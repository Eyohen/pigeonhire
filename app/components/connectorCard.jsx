import Image from "next/image";
import Link from "next/link";
import { extractMonthDay } from "../utils/formatDate";

export default function ConnectorCard({type, verified, title, subtitle, members, id, date}) {
  return (
    <Link href={type === "community" ? `/user/community/${id}` : `/user/connector/${id}`} className="w-full bg-[#FAFAFA] border border-[#E5E5E5] min-h-[146px] rounded-3xl px-8 py-6 flex justify-between mb-4">
      <div className="flex gap-8">
        <div className="min-w-[83px] h-[77px] bg-[#F5F5F5]"></div>
        <div>
          <div className="title-12 text-[#8D8D8D] mb-2">Category: Business</div>
          <div className="title-18 font-medium mb-2">{title}</div>
          <div className="title-14 text-[#8D8D8D] mb-2 w-full max-w-[58ch]">
            {subtitle}
          </div>
          {members && <div className="title-12 text-[#8D8D8D] mb-2">
            Members: {members}
          </div>}
          <Image
            alt=""
            width={53}
            height={18}
            src={type === "community" ? "/assets/icons/communityIndicator.svg" : "/assets/icons/connector.svg"}
          />
        </div>
      </div>

      <div className="w-full max-w-[214px] flex justify-between items-center h-fit">
        {verified ? <Image
          alt=""
          width={94}
          height={24}
          src={"/assets/icons/verified.svg"}
        /> : <Image
        alt=""
        width={89}
        height={24}
        src={"/assets/icons/publicRecord.svg"}
      />}

        <div className="title-12 font-medium">{extractMonthDay(date)}</div>
      </div>
    </Link>
  );
}
