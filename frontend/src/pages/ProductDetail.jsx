import React, { useRef, useState } from "react";
import "./ProductDetail.css";
import { useLoaderData } from "react-router-dom";
import { ADD_TO_CART } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { ADDING_TO_CART_totalPrice } from "../features/TotalPriceOfCartSlice";
import Reviews from "../components/review/Reviews";
import ReviewCard from "../components/review/ReviewCard";
import { FaHeart } from "react-icons/fa";

const ProductDetail = () => {
  const product = useLoaderData();
  const dispatch = useDispatch();
  const [image, setImage] = useState(product.images[0]);
  const reviewsRef = useRef(null);

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="py-2">
      <div className="row">
        <div className="imageSection col-md-6 text-center">
          <img
            src={image}
            alt="Product"
            className="img-fluid rounded shadow-sm mb-3"
            loading="lazy"
          />
          <div
            className={`d-flex justify-content-${
              product.images.length === 1 ? "flex-end" : "center"
            } gap-2`}
          >
            {product.images.map((image) => {
              return (
                <img
                  src={image}
                  className="img-thumbnail subImg"
                  alt="thumb1"
                  loading="lazy"
                  onClick={() => {
                    setImage(image);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.title}</h2>
          <p className="text-muted mb-2">{product.category}</p>
          <div className="mb-3">
            <span className="fs-4 fw-semibold text-success me-2">
              $
              {(
                product.price -
                (product.discountPercentage * product.price) / 100
              ).toFixed(2)}
            </span>
            <span className="text-decoration-line-through text-muted">
              ${product.price}
            </span>
          </div>

          <p className="text-secondary mb-4">{product.description}</p>

          <Reviews product={product} handleScrollToReviews={scrollToReviews} />

          <div className="d-flex gap-3 wishlistQuantityCartRow">
            <button className="btn bg-black text-white">
              <FaHeart size={26} />
            </button>
            <div className="quantitySection">
              <span
                onClick={() => {
                  document.querySelector("#productQuantity").innerHTML -= 1;
                }}
              >
                -
              </span>
              <span id="productQuantity">1</span>
              <span
                onClick={() => {
                  let productQuantity =
                    document.querySelector("#productQuantity");
                  let quantity = Number(productQuantity.innerHTML);
                  productQuantity.innerHTML = quantity + 1;
                  console.log(productQuantity.innerHTML);
                }}
              >
                +
              </span>
            </div>
            <button
              className="btn addToCartBtn px-4"
              onClick={() => {
                dispatch(ADD_TO_CART(product));
                dispatch(ADDING_TO_CART_totalPrice(product));
              }}
            >
              <i className="bi bi-cart-fill me-2"></i>Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4>Description</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          facilisis nisl nec erat cursus, in egestas leo sodales. Vivamus
          sagittis arcu nec justo placerat, a suscipit neque interdum. Sed
          tincidunt augue ac sem tincidunt, vel facilisis massa pulvinar.
        </p>
      </div>
      <div className="mt-5" ref={reviewsRef}>
        <ReviewCard reviews={product.reviews} />
      </div>
    </div>
  );
};

export default ProductDetail;

export const ProductDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = res.json();
  return data;
};
