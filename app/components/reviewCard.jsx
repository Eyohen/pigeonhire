import Image from "next/image";
import FilledStar from "@/public/assets/icons/filledStar.svg";
import EmptyStar from "@/public/assets/icons/emptyStar.svg";


export default function ReviewCard({review}) {
  return (
    <div className="w-full flex gap-6 border-b border-[#E5E5E5] mb-4">
      <div className="title-21 font-medium text-white min-w-[42px] h-[42px] rounded-full bg-[#DF7C0D] flex items-center justify-center">{review?.Reviewer?.firstName?.split("")[0]}</div>
      <div>
        <div className="font-medium mb-2">{review?.Reviewer?.firstName} {review?.Reviewer?.lastName}</div>
        <div className="flex items-center gap-1 mb-4">
          <Image
            width={16}
            height={16}
            src={review?.rating >= 1 ? FilledStar : EmptyStar}
            alt=""
          />
          <Image
            width={16}
            height={16}
            src={review?.rating >= 2 ? FilledStar : EmptyStar}
            alt=""
          />
          <Image
            width={16}
            height={16}
            src={review?.rating >= 3 ? FilledStar : EmptyStar}
            alt=""
          />
          <Image
            width={16}
            height={16}
            src={review?.rating >= 4 ? FilledStar : EmptyStar}
            alt=""
          />
          <Image
            width={16}
            height={16}
            src={review?.rating === 5 ? FilledStar : EmptyStar}
            alt=""
          />
        </div>
        <div className="title-14 text-[#8D8D8D] mb-4">
         {review?.comment}
        </div>
      </div>
    </div>
  );
}
