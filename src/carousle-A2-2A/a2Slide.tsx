"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/lib/carousle-A2-2A/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function A2Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      // setIsFirstScreen("result");
      return
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
    <div className="bg-white min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-center text-3xl py-4 text-black">
{
  SlideData[lastSlide].title
}      </h1>
      <div className="w-[800px] px-2  ">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={false}
          allowTouchMove={true}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center items-center">
                <div className="w-[600px] h-[400px] relative shadow-lg rounded-lg overflow-hidden">
                  <Image
                    className="object-top"
                    src={item.img}
                    fill
                    alt="image"
                    objectFit="cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
              className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400
               `}
            >
              <FaArrowLeft
                className="text-[40px]  cursor-pointer "
                onClick={handlePerv}
              />
            </div>
            <div
              className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400
              `}
            >
              <FaArrowRight
                className="text-[40px] cursor-pointer "
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
