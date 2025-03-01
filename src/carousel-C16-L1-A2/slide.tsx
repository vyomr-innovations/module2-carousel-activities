"use client";
// import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L1-A2/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
// import EmotionBar from "./emotionBar";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      //   setIsFirstScreen("emotionImage");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center ">
      <div className="w-[80%]">
        <Swiper
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="flex flex-col gap-4 pt-2">
              <h2 className="text-center text-3xl  text-black">
               {item.title}
              </h2>
              <h2 className="text-center text-xl  text-black">
                {item.subTitle}
              </h2>
              <div className="h-[400px]  relative">
                <Image
                  src={item.image}
                  fill
                  alt="slide image"
                  className="object-contain object-center border"
                />
              </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
              className={` ${
                lastSlide > 0
                  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                  : ""
              } hover:scale-90 
               `}
            >
              <FaArrowLeft
                className={`${
                  lastSlide > 0 ? "block" : "hidden"
                } text-[40px]  cursor-pointer `}
                onClick={handlePerv}
              />
            </div>
            <div
              className={` ${
                lastSlide < SlideData.length - 1
                  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                  : ""
              } hover:scale-90 
               `}
            >
              <FaArrowRight
                className={`${
                  lastSlide < SlideData.length - 1 ? "block" : "hidden"
                } text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
