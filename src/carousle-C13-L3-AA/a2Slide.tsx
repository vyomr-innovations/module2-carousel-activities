"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousle-C13-L3-AA/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function Slide() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    console.log("changing")
  };
  return (
    <div className="bg-white min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-center text-3xl py-4 text-black">
     {` Let's review emotions!     `}</h1>
      <div className="w-[900px] px-2  ">
        <Swiper
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
           <SwiperSlide>
             <div className="grid grid-cols-12 border gap-8">
             <div className="col-span-6  h-[400px] relative  rounded-lg overflow-hidden">
                  <Image
                    className="object-top"
                    src="/C13/siblings.jpg"
                    fill
                    alt="image"
                    objectFit="cover"
                  />
                </div>
                <div className="col-span-6 flex justify-center items-center ">
                  <ul className="text-black text-lg space-y-2 list-disc pl-5">
                    <li>Does my brother like my sister?</li>
                    <li>Does he enjoy playing with her?</li>
                    <li>Does he like me? Our parents?</li>
                    <li>Do my parents treat him and my sister equally?</li>
                    <li>Is he as academically bright as my sister?</li>
                    <li>Does my sister congratulate him on his achievements?</li>
                  </ul>
                </div>
             </div>
            </SwiperSlide>
          {SlideData.map((item, index) => (
            <SwiperSlide key={index}>
            <div className="grid grid-cols-12 border gap-10">
            <div className="col-span-6  h-[400px] relative  rounded-lg overflow-hidden">
                 <Image
                   className="object-top"
                   src={item.img}
                   fill
                   alt="image"
                   objectFit="cover"
                 />
               </div>
               <div className="col-span-6 flex justify-center items-center ">
                 <h4 className="text-black text-lg">
                  {item.text}
                 </h4>
               </div>
            </div>
           </SwiperSlide>
          ))}
          <SwiperSlide>
             <div className="grid grid-cols-12 border">
             <div className="col-span-6  h-[400px] relative  rounded-lg overflow-hidden">
                  <Image
                    className="object-top"
                    src="/C13/empathy_vs_envy.jpg"
                    fill
                    alt="image"
                    objectFit="cover"
                  />
                </div>
                <div className="col-span-6 flex justify-center items-center ">
                  <ul className="text-black text-lg space-y-2 list-disc pl-5">
                    <li>Congratulate</li>
                    <li>Wish </li>
                    <li>Be nice</li>
                    <li>Play</li>
                    <li>Help</li>
                    <li>Do things together!</li>
                  </ul>
                </div>
             </div>
            </SwiperSlide>
          <div className=" py-4 flex items-center justify-around  text-black">
           <div
                        className={`${lastSlide > 0 ? "border border-black bg-yellow-400  shadow-inner shadow-[#000000b9]":""}  rounded-full p-3 hover:scale-90 `}
                      >
                        <FaArrowLeft
                          className={`${lastSlide > 0 ? "block":"hidden"} text-[40px]  cursor-pointer` }
                          onClick={handlePerv}
                        />
                      </div>
                      <div
              className={`${lastSlide < SlideData.length +1   ? "border border-black bg-yellow-400  shadow-inner shadow-[#000000b9]":""} rounded-full p-3  hover:scale-90 `}
            >
              <FaArrowRight
                className={`${lastSlide < SlideData.length +1 ? "block":"hidden"} text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
