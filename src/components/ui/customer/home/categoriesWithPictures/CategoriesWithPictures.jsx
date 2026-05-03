import React from "react";
import { assets } from "@assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "./Category";

const categories = [
  {
    id: 1,
    name: "SKIN CARE",
    image: assets.skin_care_category,
  },
  {
    id: 2,
    name: "MAKEUP",
    image: assets.makeup_category,
  },
  {
    id: 3,
    name: "HAIR CARE",
    image: assets.hair_care_category,
  },
  {
    id: 4,
    name: "BODY CARE",
    image: assets.skin_care_category,
  },
  {
    id: 5,
    name: "FRAGRANCE",
    image: assets.fragrance_category,
  },
  {
    id: 6,
    name: "BATH & SHOWER",
    image: assets.hair_care_category,
  },
  {
    id: 7,
    name: "COSMETICS",
    image: assets.makeup_category,
  },
  {
    id: 8,
    name: "BRUSHES",
    image: assets.fragrance_category,
  },
];

const CategoriesWithPictures = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Shop by Category
        </h2>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={3}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <CategoryCard cat={cat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet Slider */}
        <div className="max-sm:hidden md:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={5}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <CategoryCard cat={cat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet + Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesWithPictures;
