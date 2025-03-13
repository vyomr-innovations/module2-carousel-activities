"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C15-L1-A4/slideQustion.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function QuizSlide() {
  const correctSound = new Audio("/sound/correct.mp3");
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<{
    [key: number]: number | null;
  }>({});

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
  };

  const handleAnswer = (ans: string, index: number, Answerindex: number) => {
    if (SlideData[index]?.correct === ans) {
      setSelectedAnswer((prev) => ({ ...prev, [index]: Answerindex }));
      correctSound.play();
      setTimeout(() => {
        swiperRef.current?.slideNext();
      }, 1000);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[950px] px-2">
        <h1 className="text-center text-3xl py-4 text-black">Quiz</h1>
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
            <SwiperSlide key={index} className="border-2 rounded-lg p-2">
              <div className="flex justify-center items-center flex-col">
                <div className="grid grid-cols-12">
                  <div className="col-span-6 w-[500px] h-[400px] relative">
                    <Image
                      src={item.image}
                      fill
                      alt="image"
                      className="object-contain"
                    />
                  </div>
                  <div className="col-span-6 flex flex-col justify-center items-center">
                    <h1 className="text-black text-xl py-5">{item.Qustion}</h1>
                    {item.Answers.map((i, Answerindex) => (
                      <button
                        key={Answerindex}
                        className={`text-md text-white min-w-[280px] bg-blue-700 px-5 py-1 rounded-lg border border-black my-2 
                          ${
                            selectedAnswer[index] === Answerindex
                              ? "bg-green-500"
                              : ""
                          }`}
                        onClick={() => handleAnswer(i, index, Answerindex)}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="py-4 flex items-center justify-around text-black">
          <div
            className={` ${
              lastSlide > 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px] cursor-pointer `}
              onClick={handlePerv}
            />
          </div>
          <div
            className={` ${
              lastSlide < SlideData.length - 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SlideData.length - 1 ? "block" : "hidden"
              } text-[40px] cursor-pointer `}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
