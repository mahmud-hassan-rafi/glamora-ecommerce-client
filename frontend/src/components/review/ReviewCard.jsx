import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import "../../pages/ProductDetail.css";
import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewCard = ({ reviews }) => {
  return (
    <div className="bg-white rounded-2xl ">
      <div className="flex justify-between items-start">
        <h4 className=" mb-0">Reviews</h4>
        <hr className="" />
        {reviews.map((review) => {
          return (
            <div className={"border p-4"}>
              {/* rating */}
              <div className="flex items-center mt-1 text-yellow-500">
                {/* <span>{(<FaStar />).repeat(review.rating)}</span> */}
                <span>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} color="#fdcc0d" />
                  ))}
                </span>
                <span>
                  {Array.from({ length: 5 - review.rating }, (_, i) => {
                    return <FaStar key={i} color="#cfcfcf" />;
                  })}
                </span>
                {/* <span>{"☆".repeat(5 - review.rating)}</span> */}
              </div>
              {/* verified + name */}
              <div className="nameDate flex items-center gap-2 mt-1 text-sm text-green-600 font-medium">
                <span className="text-black" style={{ fontSize: "14px" }}>
                  {review.reviewerName}
                </span>
                <BiCheckCircle
                  size={16}
                  className="text-success"
                  style={{ margin: "0 0 2px 5px" }}
                />
                <span className="date text-sm text-gray-500">10 May 2025</span>
              </div>
              {/* Review text */}
              <p className="mt-3 text-gray-700 leading-relaxed">
                {review.comment}
              </p>
              {/* like button */}
              <div className="flex items-center gap-1 mt-3 text-gray-600 cursor-pointer">
                <span>👍</span>
                <span className="text-sm">1</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
