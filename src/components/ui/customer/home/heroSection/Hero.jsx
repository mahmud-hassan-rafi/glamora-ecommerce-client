import HeroSectionSwiper from "@components/ui/home/HeroSectionSwiper";
import React from "react";
import Categories from "./Categories";

const Hero = () => {
  return (
    <div className="relative flex gap-4 lg:gap-8 w-full sm:h-85 md:h-[60vh] max-h-125 pt-2.5 overflow-hidden repeat-infinite">
      <Categories className={"hidden lg:flex flex-col w-75 bg-white h-max"} />
      <HeroSectionSwiper />
    </div>
  );
};

export default Hero;
