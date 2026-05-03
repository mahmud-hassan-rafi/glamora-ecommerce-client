import React, { useRef, useState, useMemo } from "react";
import "../styles/ProductDetails.css";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "@features/cart/cartSlice";

// import Reviews from "../components/review/Reviews";
// import ReviewCard from "../components/review/ReviewCard";

const ProductDetail = () => {
  const product = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const reviewsRef = useRef(null);

  // 🔥 Optimized price calculation
  const discountedPrice = useMemo(() => {
    return (
      product.price -
      (product.discountPercentage * product.price) / 100
    ).toFixed(2);
  }, [product]);

  const handleScrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);

  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(ADD_TO_CART(product));
  };

  return (
    <div className="py-6">
      <div className="mb-4">
        {/* BACK BUTTON */}
        <button
          onClick={handleBack}
          className="text-sm text-gray-500 hover:text-black mb-2"
        >
          <span className="mb-4">←</span> Back
        </button>

        {/* BREADCRUMB */}
        <div className="text-sm text-gray-400 flex items-center gap-2 flex-wrap">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-black"
          >
            Home
          </span>

          <span>/</span>

          <span
            onClick={() => navigate("/shop")}
            className="cursor-pointer hover:text-black"
          >
            Shop
          </span>

          <span>/</span>

          <span className="text-gray-600 font-medium truncate">
            {product.title}
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* IMAGE SECTION */}
        <div className=" w-full flex flex-col items-center">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-full sm:w-80 sm:h-80 object-cover rounded-lg shadow mb-4"
            loading="lazy"
          />

          <div
            className={`w-full max-w-xs flex gap-2 ${
              product.images.length === 1 ? "justify-start" : "justify-center"
            }`}
          >
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-20 h-20 object-cover cursor-pointer rounded border hover:scale-105 transition ${selectedImage === img && "border-blue-600"}`}
                alt="product thumbnail"
                loading="lazy"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {product.title}
          </h2>

          <p className="text-gray-500 mb-2 capitalize">{product.category}</p>

          {/* PRICE */}
          <div className="mb-3">
            <span className="text-2xl font-semibold text-green-600 mr-2">
              ${discountedPrice}
            </span>
            <span className="line-through text-gray-400">${product.price}</span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* REVIEWS */}
          {/* <Reviews
            product={product}
            handleScrollToReviews={handleScrollToReviews}
          /> */}

          {/* ACTIONS */}
          <div className="flex items-center max-md:justify-between gap-8 mt-4">
            {/* Wishlist */}
            <button className="w-16 h-12 flex items-center justify-center bg-black hover:opacity-90 text-white rounded-lg cursor-pointer">
              <FaHeart size={20} />
            </button>

            {/* QUANTITY */}
            <div className="flex items-center justify-between w-28 h-12 px-3 border border-gray-300 rounded-lg">
              <span
                onClick={decreaseQty}
                className="text-xl text-gray-500 font-semibold cursor-pointer hover:text-primary"
              >
                -
              </span>

              <span className="font-medium">{quantity}</span>

              <span
                onClick={increaseQty}
                className="text-xl text-gray-500 font-semibold cursor-pointer hover:text-primary"
              >
                +
              </span>
            </div>

            {/* ADD TO CART */}
            <button
              className="px-3 md:px-6 h-12 bg-primary text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition text-sm cursor-pointer"
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart-fill"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-5">
        <h4>Description</h4>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>

      {/* REVIEWS LIST */}
      <div className="mt-5" ref={reviewsRef}>
        {/* <ReviewCard reviews={product.reviews} /> */}
      </div>
    </div>
  );
};

export default ProductDetail;

// Loader function for product details data;
export const ProductDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
};
