"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/css/swiper.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import AnimatedText from "./AnimatedText";
import { Button } from "@nextui-org/react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    setTriggerAnimation(true);
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
    setTriggerAnimation(false);
    setTimeout(() => setTriggerAnimation(true), 100);
  };

  // Framer Motion fade-in variant
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // autoplay={{ delay: 4500, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-[80vh] w-full mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <motion.div
            className="relative w-full h-full bg-cover bg-center bg-gray-100"
            // style={{
            //   backgroundImage:
            //     "url('https://img.freepik.com/premium-photo/abstract-blue-gradient-background-with-subtle-white-lines-dots_1174990-200352.jpg?w=1060')",
            // }}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant} // Apply fade-in variant
          >
            <div className="absolute inset-0 flex items-center justify-between  max-w-7xl mx-auto bg-opacity-30  ">
              <div className="text-center w-3/5">
                <p className="text-green-500 text-center animate-pulse font-bold rounded bg-green-200 my-3">
                  Mega Sale Madness! Enjoy 50% off
                </p>
                {triggerAnimation && (
                  <AnimatedText
                    className="text-3xl"
                    text={`Sparkling Clean Starts Here: Discover Top-Quality Supplies\nfor Every Need.`}
                  />
                )}

                <Button
                  color="primary"
                  className="my-4 border font-bold"
                  variant="flat"
                >
                  Shop Now
                </Button>
              </div>
              <motion.img
                src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo2/wp-content/uploads/sites/6/2021/08/2.jpg"
                alt=""
                initial="hidden"
                animate="visible"
                className=" h-full object-contain"
                variants={fadeInVariant} // Apply fade-in variant to the image as well
              />
            </div>
          </motion.div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <motion.div
            className="relative w-full h-full bg-cover bg-center bg-white"
            // style={{
            //   backgroundImage:
            //     "url('https://img.freepik.com/premium-photo/abstract-blue-background-with-white-lines_1174990-178622.jpg?w=1060')",
            // }}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant} // Apply fade-in variant
          >
            <div className="absolute inset-0 flex items-center justify-between  max-w-7xl mx-auto bg-opacity-30 p-8 ">
              <div className="text-left w-1/2 flex-wrap">
                {triggerAnimation && (
                  <AnimatedText
                    className="text-3xl"
                    text={`Sparkling Clean Starts Here: Discover Top-Quality Supplies\nfor Every Need.`}
                  />
                )}
                <Button color="primary" variant="bordered">
                  Bordered
                </Button>
              </div>
              <motion.img
                src="https://vue.envytheme.com/tuan/_nuxt/banner-img-4.BluUXKza.png"
                alt=""
                initial="hidden"
                animate="visible"
                variants={fadeInVariant} // Apply fade-in variant to the image as well
              />
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
