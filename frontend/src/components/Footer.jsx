import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <span className="sec1">
          <h2>RUPBARI</h2>
          <ul>
            <li>
              <Link>OUR STORY</Link>
            </li>
            <li>
              <Link>SHAJGOJ MAGAZINE</Link>
            </li>
            <li>
              <Link>SHAJGOJ OUTLETS</Link>
            </li>
            <li>
              <Link>JOIN OUR TEAM</Link>
            </li>
            <li>
              <Link>AUTHENTICITY</Link>
            </li>
          </ul>
          <hr />
          <p>SHARE YOUR LOVE</p>
          <ul className={"socialLogos"}>
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </span>
        <span className="sec2">
          <h6>TOP CATEGORIES</h6>
          <ul>
            <li>
              <Link>MAKEUP</Link>
            </li>
            <li>
              <Link>SKIN</Link>
            </li>
            <li>
              <Link>EYE CARE</Link>
            </li>
            <li>
              <Link>HAIR</Link>
            </li>
            <li>
              <Link>PERSONAL CARE</Link>
            </li>
            <li>
              <Link>NATURAL</Link>
            </li>
            <li>
              <Link>MOM & BABY</Link>
            </li>
          </ul>
        </span>
        <span className="sec3">
          <h6>QUICK LINKS</h6>
          <ul>
            <li>
              <Link>OFFERS</Link>
            </li>
            <li>
              <Link>MENS PRODUCTS</Link>
            </li>
            <li>
              <Link>SKIN CONCERNS</Link>
            </li>
            <li>
              <Link>NEW ARRIVAL</Link>
            </li>
            <li>
              <Link>MAKEUP</Link>
            </li>
          </ul>
        </span>
        <span className="sec4">
          <h6>ALL ABOUT BEAUTY</h6>
          <ul>
            <li>
              <Link>KNOW YOUR ROUTINE</Link>
            </li>
            <li>
              <Link>HAIR CARE 101</Link>
            </li>
            <li>
              <Link>SKIN CARE 101</Link>
            </li>
            <li>
              <Link>MAKEUP 101</Link>
            </li>
          </ul>
        </span>
        <span className="sec5">
          <h6>HELP</h6>
          <ul>
            <li>
              <Link>CONTACT US</Link>
            </li>
            <li>
              <Link>POINTS</Link>
            </li>
            <li>
              <Link>FAQS</Link>
            </li>
            <li>
              <Link>SHIPPING & DELIVERY</Link>
            </li>
            <li>
              <Link>TERMS & CONDITIONS</Link>
            </li>
            <li>
              <Link>REFUND & RETURN POLICY</Link>
            </li>
            <li>
              <Link>TRADE LICENSE</Link>
            </li>
            <li>
              <Link>PRIVACY POLICY</Link>
            </li>
          </ul>
          <hr />
          <p>PAYMENTS ACCEPTED</p>
          <img
            src="https://shop.shajgoj.com/_next/image?url=%2Fassets%2Fpayment-system.png&w=256&q=75"
            alt=""
          />
        </span>
      </div>
      <hr />
      <div className="bottomFooter">
        <ul>
          <li>
            <Link>AUTHENTICITY</Link>
          </li>
          <li>
            <Link>TERMS & CONDITIONS</Link>
          </li>
          <li>
            <Link>PRIVACY POLICY</Link>
          </li>
          <li>
            <Link>REFUND & RETURN POLICY</Link>
          </li>
          <li>
            <Link>FAQS</Link>
          </li>
        </ul>
        <p className="copyrightRow">Copyright © 2025 Rupbari Limited. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
