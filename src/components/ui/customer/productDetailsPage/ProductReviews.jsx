import { Star } from "lucide-react";

export default function ProductReviews({ product }) {
  return (
    <div className="max-w-4xl space-y-8">

      <h2 className="text-2xl font-bold text-neutral-900">
        Customer Reviews
      </h2>

      <div className="space-y-6">

        {product.reviews?.map((review, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-neutral-200 p-6"
          >

            {/* rating */}
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            {/* comment */}
            <p className="mt-3 text-neutral-700">
              {review.comment}
            </p>

            {/* user */}
            <div className="mt-4 text-sm text-neutral-500">
              — {review.reviewerName}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}