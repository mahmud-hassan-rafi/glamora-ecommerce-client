import React from "react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import { assets } from "@assets/assets";

const slides = [
  {
    id: 1,
    image: assets.hero_section_banner1,
  },
  {
    id: 2,
    image: assets.hero_section_banner2,
  },
];

const HeroSectionSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectCoverflow]}
      loop={true}
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="fade"
      className="size-full mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="size-full">
          <div className="h-full w-full">
            <img src={slide.image} className=" w-full h-auto object-cover object-center" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSectionSwiper;
