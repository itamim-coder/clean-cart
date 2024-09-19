"use client";
import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Navigation, Thumbs]);

const ProductSlider = ({ imageUrl }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
      <Swiper
        className="main-slide-carousel relative mb-6"
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        navigation
      >
        {[imageUrl]?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="block">
              <img
                src={img}
                alt="Product Image"
                className="max-lg:mx-auto w-full rounded-2xl border-2 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="nav-for-slider"
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
      >
        {[imageUrl]?.map((img, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <img
                src={img}
                alt="Thumbnail Image"
                className={`cursor-pointer rounded-xl transition-all duration-500 object-cover border-2 ${
                  isActive ? "border-indigo-600" : "border-transparent"
                }`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
