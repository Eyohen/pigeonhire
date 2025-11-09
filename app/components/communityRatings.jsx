"use client"
import Image from "next/image";
import ArrowDown from "./arrowDown";
import ReviewCard from "./reviewCard";
import { useEffect, useState } from "react";
import { createCommunityReview, getCommunityReviews } from "../apis/community";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import FilledStar from "@/public/assets/icons/filledStar.svg";
import EmptyStar from "@/public/assets/icons/emptyStar.svg";


export default function CommunityRatings({communityId, averageRating}) {
  const {token, userInfo} = useSelector((state) => state.auth);
console.log("userInfo", userInfo);

    const [loading, setLoading] = useState(false);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
  
    // Handle mouse enter on stars
    const handleMouseEnter = (starIndex) => {
      setHoveredRating(starIndex);
    };
  
    // Handle mouse leave from stars container
    const handleMouseLeave = () => {
      setHoveredRating(0);
    };
  
    // Handle click on stars
    const handleClick = (starIndex) => {
      setRating(starIndex);
    };
    
    // Create an array of 5 stars
    const stars = Array(5).fill(0);

    // Handle click on stars
    const handleSubmit = async (e) => {
      try {
        setLoading(true);
        e.preventDefault();
      if(rating === 0) {
        toast.error("Please select a rating before submitting");
      }
      if(!comment.trim()) {
        toast.error("Comment can't be empty");

      }
      const response = await createCommunityReview({
        rating, comment, reviewerId: userInfo?.user?.id
      }, communityId, token);

      console.log("createCommunityReview", response);
      toast.success("Thankyou for your review")
      setComment("");
      setRating(0);
      handleGetReviews();
      } catch (error) {
        console.log("Error submitting rating:", error);
        toast.error(error?.response?.data?.msg || "Error submitting rating. Please try again.");
  
      } finally {
        setLoading(false)
      }
      
    };

    const handleGetReviews = async () => {
      const response = await getCommunityReviews(communityId, token);

      console.log("getCommunityReviews", response);
      setReviews(response?.data?.reviews);
    }

    useEffect(() => {
      handleGetReviews();
    }, [])

    


    
  const countRatingsByScore = () => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    reviews?.forEach(review => {
      if (review.rating >= 1 && review.rating <= 5) {
        counts[review.rating]++;
      }
    });
    
    return counts;
  };

  const calculatePercentage = (count) => {
    const totalReviews = reviews?.length;
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  const ratingCounts = countRatingsByScore();



  const ratings = [5, 4, 3, 2, 1];
  return (
    <div className="p-6 border border-[#E5E5E5] rounded-3xl">
      <div className="max-w-[829px] mx-auto title-18 font-medium mb-6">Ratings</div>

      <div className="max-w-[829px] mx-auto flex">
        <div className="flex flex-col items-center justify-center mr-8 min-w-[128px]">
          <div className="title-32 font-semibold mb-6">{averageRating}</div>
          <div className="flex items-center gap-1 mb-2">
            <Image
              width={24}
              height={24}
              src={averageRating >= 1 ? FilledStar : EmptyStar}
              alt=""
            />
            <Image
              width={24}
              height={24}
              src={averageRating >= 2 ? FilledStar : EmptyStar}
              alt=""
            />
            <Image
              width={24}
              height={24}
              src={averageRating >= 3 ? FilledStar : EmptyStar}
              alt=""
            />
            <Image
              width={24}
              height={24}
              src={averageRating >= 4 ? FilledStar : EmptyStar}
              alt=""
            />
            <Image
              width={24}
              height={24}
              src={averageRating === 5 ? FilledStar : EmptyStar}
              alt=""
            />
          </div>
          <div className="title-14 text-[#8D8D8D]">{reviews?.length} ratings</div>
        </div>
        <div className="w-px h-[154px] bg-[#E5E5E5] mr-8"></div>
        <div className="w-full mr-8">
          {ratings?.map(rating => (
            <div className="flex items-center gap-8 mb-[19px]" key={rating}>
              <div className="w-full h-3 rounded-2xl bg-[#FAFAFA]">
                <div
                  className="h-full bg-[#0EA42A] rounded-2xl"
                  style={{ width: `${calculatePercentage(ratingCounts[rating])}%` }}
                ></div>
              </div>

              <div className="title-14 leading-none grid grid-cols-2 gap-2 whitespace-nowrap">
                <div>{rating}.0</div>
                <div className="text-[#8D8D8D]">{ratingCounts[rating]} reviews</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-[#E5E5E5] my-6"></div>

      <div>
        <div className="w-full max-w-[829px] mx-auto title-18 font-medium mb-6">Reviews</div>
        <div className="w-full max-w-[829px] mx-auto">
          {reviews?.map((review) =>
            <ReviewCard review={review} />
          )}
        </div>

        <div className="w-full h-px bg-[#E5E5E5] my-6"></div>
        <div className="w-full max-w-[829px] mx-auto">
          <div className="title-18 font-medium mb-6">
            Rate & Submit Review
          </div>
          <div className="title-14 text-center mb-6">
            How was your experience?
          </div>

          <div
            className="flex items-center justify-center gap-4 mb-8"
            onMouseLeave={handleMouseLeave}
          >
            {stars.map((_, index) => {
              const starIndex = index + 1;
              const isFilled =
                hoveredRating > 0
                  ? starIndex <= hoveredRating
                  : starIndex <= rating;

              return (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(starIndex)}
                  onClick={() => handleClick(starIndex)}
                  className="star-container pointer"
                >
                  <Image
                    width={42}
                    height={42}
                    src={isFilled ? "/assets/icons/filledStar.svg" : "/assets/icons/emptyStar.svg"}
                    alt={`Star ${starIndex}`}
                  />
                </div>
              );
            })}
          </div>

          <textarea
            name=""
            id=""
            placeholder="Write about your experience"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="w-full h-[139px] border border-[#E5E5E5] rounded mb-8 px-6 py-4"
          ></textarea>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="primary-button max-w-[429px] h-14 rounded-[48px] mx-auto"
          >
            {loading ? "Loading..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
}
