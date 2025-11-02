import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <h1 className="text-center">Home Page</h1> */}
      <div className="banner">
        <img
          src="https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F10%2Fwinter-skin-rescue-website-homepage-slider-2.jpg&w=1920&q=75"
          alt=""
        />
        <ul>
          <NavLink className={"clicked"}>
            <li></li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>{" "}
          <NavLink>
            <li></li>
          </NavLink>{" "}
          <NavLink>
            <li></li>
          </NavLink>{" "}
          <NavLink>
            <li></li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>
        </ul>
      </div>
      <div className="subOfferBanner">
        <img
          src="https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F08%2Fponds-full-skincare-pop-up-ad-for-shajgoj-1920-x-200-pixels.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default Home;
