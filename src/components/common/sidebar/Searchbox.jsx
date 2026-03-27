import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbox = () => {
  return (
    <div className="w-full px-6 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search for products"
        className="placeholder-gray-800/80 text-base font-medium outline-0"
      />
      <IoSearchOutline className="size-5.5" />
    </div>
  );
};

export default Searchbox;
