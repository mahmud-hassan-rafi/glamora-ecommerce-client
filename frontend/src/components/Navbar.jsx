import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const productsInCart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  console.log(totalPrice);

  return (
    <div className="navbar">
      <div className="upperRow">
        <div className="logo">
          <img src="../src/assets/rupbari_logo.svg" alt="" />
        </div>
        <div className="searchBox">
          <input
            type="search"
            name=""
            className="search"
            id="search"
            placeholder="Search for products"
          />
        </div>
        <div className="loginBtn">
          <ul>
            <li className="position-relative">
              <Link>
                <IoMdHeartEmpty />
              </Link>
            </li>
            <li className="position-relative">
              <Link to={"/login"}>
                <LuUserRound />
              </Link>
            </li>
            <li className="cartIcon">
              <Link to={"/cart"}>
                <span className="position-relative">
                  <FiShoppingCart />
                  <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                    {productsInCart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </span>
                <span>${totalPrice.toFixed(2)}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomRow">
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>SHOP</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>CONTACT US</NavLink>
          </li>
        </ul>
        <div></div>
        <div>Delivery | Inside Dhaka - ৳40 | Outside Dhaka - ৳80</div>
        <div>
          <ul>
            <li>
              <FaFacebook />{" "}
            </li>
            <li>
              {" "}
              <FaInstagram />{" "}
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
