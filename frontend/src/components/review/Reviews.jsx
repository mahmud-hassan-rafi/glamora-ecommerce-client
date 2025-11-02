import React from "react";
import "../../pages/ProductDetail.css";
import { FaStar } from "react-icons/fa";

const Reviews = ({ product, handleScrollToReviews }) => {
  const avgReview = (
    product.reviews.reduce((avgRating, review) => {
      return avgRating + review.rating;
    }, 0) / product.reviews.length
  ).toFixed(1);

  console.log(avgReview);

  return (
    <div className="mb-3 reviewSection" onClick={handleScrollToReviews}>
      <span>
        {Array.from({ length: Math.round(avgReview) }, (_, i) => (
          <FaStar key={i} color="#fdcc0d" />
        ))}
      </span>
      <span>
        {Array.from({ length: Math.round(5 - avgReview) }, (_, i) => (
          <FaStar key={i} color="#cfcfcf" />
        ))}
      </span>
      {/* <span className="text-warning">★ ★ ★ ★ ☆</span> */}
      <span className="text-muted">({product.reviews.length} reviews)</span>
    </div>
  );
};

export default Reviews;
