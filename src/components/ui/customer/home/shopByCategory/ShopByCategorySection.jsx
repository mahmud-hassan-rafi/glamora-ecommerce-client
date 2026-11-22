import { categories } from "@utils/categoriesData";
import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../common/Title";
import { ChevronRight, ChevronLeft } from "lucide-react";

// thinking for draggable scroll. first of all we have to define the ref for
// the scroll container. then we have to add event listeners for mouse down,
// mouse move and mouse up. on mouse down we have to set the isDragging state
// to true and store the initial position of the mouse and the scroll position
// of the container. on mouse move we have to check if the isDragging state
// is true and if it is true then we have to calculate the new scroll position
//  of the container based on the initial position of the mouse and the current
//  position of the mouse. on mouse up we have to set the isDragging state to false.

const ShopByCategorySection = () => {
  const navigate = useNavigate();
  const scrollContainerRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e) => {
    const scrollContainer = scrollContainerRef.current;

    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollContainer.offsetLeft); // offsetLeft => parent এর left থেকে container কত দূরে আছে & pageX => mouse left থেকে কত দূরে আছে
    // e.pageX - scrollContainer.offsetLeft => mouse এর position থেকে container এর left position বাদ দিলে আমরা পাবো mouse এর position থেকে container এর left edge পর্যন্ত distance
    setScrollLeft(scrollContainer.scrollLeft); // scrollLeft => আমরা কতটা স্ক্রল করেছি container এর ভিতরে
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return; // যদি mouse down না থাকে তাহলে কিছুই না করো
    const scrollContainer = scrollContainerRef.current;

    const x = e.pageX - scrollContainer.offsetLeft; // mouse এর current position থেকে container এর left edge পর্যন্ত distance
    const walk = (x - startX) * 1.3; // mouse এর current position থেকে initial position পর্যন্ত distance * 2 => আমরা চাইলে এই value কে adjust করতে পারি যাতে scroll এর speed বেশি বা কম করা যায়
    scrollContainer.scrollLeft = scrollLeft - walk; // initial scroll position - walk => আমরা চাইলে এই value কে adjust করতে পারি যাতে scroll এর direction change করা যায়
    if (Math.abs(walk) > 5) {
      // যদি walk এর value 5 এর বেশি হয় তাহলে আমরা ধরে নেবো যে user scroll করতে চাচ্ছে, না যে user click করে drag করতে চাচ্ছে
      setIsDragging(true);
    }
  };

  const handleLeftArrowClick = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({ left: -130, behavior: "smooth" }); // left: -200 => scroll left by 200px, behavior: "smooth" => smooth scroll
  };

  const handleRightArrowClick = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({ left: 130, behavior: "smooth" }); // left: 200 => scroll right by 200px, behavior: "smooth" => smooth scroll
  };

  return (
    <div className="w-full">
      {/* title */}
      <Title title="Shop by Category" />

      {/* categories */}
      <div className="relative flex w-full gap-8 items-center group">
        <span
          className="hidden group-hover:flex absolute left-0 top-auto bottom-auto text-white bg-gray-700/65 rounded-full p-2 transition-all duration-300 ease-in-out"
          onClick={handleLeftArrowClick}
        >
          <ChevronLeft size={30} />
        </span>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-8 items-center justify-start w-full overflow-x-auto py-8 scrollbar scrollbar-none scrollbar-track-gray-200 scrollbar-thumb-gray-500 select-none ${isMouseDown ? "cursor-grabbing" : "cursor-grab"}`}
        >
          {categories.map((category) => (
            <div
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                navigate(category.path);
              }}
              key={category.id}
              className={`flex flex-col flex-1 items-center gap-4 ${isDragging ? "scrollbar-hover:cursor-grabbing" : "cursor-pointer"}`}
            >
              <div className="size-20 sm:size-30 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  draggable={false}
                  className="size-full object-cover rounded-full"
                />
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                {category.name}
              </span>
            </div>
          ))}
        </div>
        <span
          className="hidden group-hover:flex absolute right-0 top-auto bottom-auto text-white bg-gray-700/65 rounded-full p-2 transition-all duration-300 ease-in-out"
          onClick={handleRightArrowClick}
        >
          <ChevronRight size={30} />
        </span>
      </div>
    </div>
  );
};

export default ShopByCategorySection;
