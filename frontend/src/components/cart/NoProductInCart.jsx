import React from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NoProductInCart.css";

const NoProductInCart = () => {
  return (
    <div className="noProductInCart">
      <span className="icon">
        <BsCartX />
      </span>
      <h1 className="title">Your cart is currently empty.</h1>
      <p className="info mt-2">
        Before proceed to checkout you must add some products to your shopping
        cart. <br />
        You will find a lot of interesting products on our "Shop" page.
      </p>
      <Link to={"/shop"}>
        <button className="btn btn-primary">return to shop</button>
      </Link>
    </div>
  );
};

export default NoProductInCart;
