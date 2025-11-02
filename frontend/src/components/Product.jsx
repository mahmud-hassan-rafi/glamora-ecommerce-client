import React from "react";
import "./Product.css";
import { Tooltip } from "@mui/material";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoShuffleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../features/CartSlice";
import { ADDING_TO_CART_totalPrice } from "../features/TotalPriceOfCartSlice";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    // src={product.images[0]}
    <div className="card" onClick={() => navigate("/shop/" + product.id)}>
      <div className="productImg">
        <div className="hoverMenuCart">
          <Tooltip
            title="Add to Cart"
            arrow
            placement="left"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#000",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "0px",
                  boxShadow: 3,
                },
              },
              arrow: {
                sx: { color: "#000" },
              },
            }}
          >
            <span
              onClick={(event) => {
                event.stopPropagation();
                dispatch(ADD_TO_CART(product));
                dispatch(ADDING_TO_CART_totalPrice(product));
              }}
            >
              <BsCart2 />
            </span>
          </Tooltip>
          <Tooltip
            title="Quick view"
            arrow
            placement="left"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#000",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "0px",
                  boxShadow: 3,
                },
              },
              arrow: {
                sx: { color: "#000" },
              },
            }}
          >
            <span
              onClick={(event) => {
                event.stopPropagation();
                console.log("quick view clicked");
              }}
            >
              <IoIosSearch />
            </span>
          </Tooltip>
          <Tooltip
            title="compare"
            arrow
            placement="left"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#000",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "0px",
                  boxShadow: 3,
                },
              },
              arrow: {
                sx: { color: "#000" },
              },
            }}
          >
            <span
              onClick={(event) => {
                event.stopPropagation();
                console.log("compare clicked");
              }}
            >
              <IoShuffleOutline />
            </span>
          </Tooltip>
          <Tooltip
            title="Add to wishlist"
            arrow
            placement="left"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#000",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "0px",
                  boxShadow: 3,
                },
              },
              arrow: {
                sx: { color: "#000" },
              },
            }}
          >
            <span
              onClick={(event) => {
                event.stopPropagation();
                console.log("add to wishlist clicked");
              }}
            >
              <IoIosHeartEmpty />
            </span>
          </Tooltip>
        </div>
        <img src={product.thumbnail} className="card-img-top" loading="lazy" />
      </div>
      <div className="card-body">
        <div className="productName">
          <h5 className="card-title ">{product.title}</h5>
        </div>
        <div className="saleBadge">SALE</div>
        <p className="card-text">
          <span>${product.price}</span>
          <span>
            $
            {(
              product.price -
              (product.discountPercentage * product.price) / 100
            ).toFixed(2)}
          </span>
        </p>
        <div className="cartAndBuyBtn">
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(ADD_TO_CART(product));
              dispatch(ADDING_TO_CART_totalPrice(product));
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
