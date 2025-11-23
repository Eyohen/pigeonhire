import Image from "next/image";
import Link from "next/link";
import { extractMonthDay } from "../utils/formatDate";

export default function ConnectorCard({type, verified, recordType, title, subtitle, members, id, date}) {
  return (
    <Link href={type === "community" ? `/user/community/${id}` : `/user/connector/${id}`} className="w-full bg-[#FAFAFA] border border-[#E5E5E5] min-h-[146px] rounded-3xl px-8 py-6 flex justify-between hover:shadow-md hover:border-[#D5D5D5] transition-all duration-200">
      <div className="flex gap-8">
        <div className="min-w-[83px] h-[77px] bg-[#F5F5F5] rounded-lg"></div>
        <div>
          <div className="title-12 text-[#8D8D8D] mb-2">Category: Business</div>
          <div className="title-18 font-medium mb-2 text-gray-900">{title}</div>
          <div className="title-14 text-[#8D8D8D] mb-3 w-full max-w-[58ch] line-clamp-2">
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
        {recordType === "owner record" ? (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
            owner record
          </span>
        ) : recordType === "public record" ? (
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap">
            public record
          </span>
        ) : verified ? (
          <Image
            alt=""
            width={94}
            height={24}
            src={"/assets/icons/verified.svg"}
          />
        ) : (
          <Image
            alt=""
            width={89}
            height={24}
            src={"/assets/icons/publicRecord.svg"}
          />
        )}

        <div className="title-12 font-medium text-gray-700">{extractMonthDay(date)}</div>
      </div>
    </Link>
  );
}
