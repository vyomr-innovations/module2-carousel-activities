"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L3-A4/slideData.json";
import options from "@/carousel-C16-L3-A4/optionData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

type myProps = {
  setIsFirstScreen: (value: string) => void;
  result: { id: number; value: string; isCorrect: boolean }[];
  setResult: React.Dispatch<
    React.SetStateAction<{ id: number; value: string; isCorrect: boolean }[]>
  >;
};

export default function SlideC15({
  setIsFirstScreen,
  result,
  setResult,
}: myProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [right, setRight] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  const [time, setTime] = useState(30);
  const [over, setOver] = useState<boolean>(false);
  const clock = new Audio("sound/clock.mp3");
  const correctAns = new Audio("sound/correct.mp3");

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      setIsFirstScreen("result");
    }
    swiperRef.current?.slideNext();
    setWrong(null);
    setRight(null);
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    clock.play();
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(interval);
          setOver(true);
          clock.pause();

          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lastSlide]);

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    setTime(30);
    setOver(false);
  };

  const handleCheck = (val: string, index: number) => {
    if (val === SlideData[lastSlide].answer) {
      if (result.some((item) => item.id === lastSlide)) return;
      const newAnswer = {
        id: lastSlide,
        value: val,
        isCorrect: val === SlideData[lastSlide].answer,
      };

      setResult((prev) => {
        const updatedResult = prev ? [...prev, newAnswer] : [newAnswer];
        return updatedResult;
      });
      setRight(index);
    } else {
      setWrong(index);
    }
  };

  useEffect(() => {
    // console.log(result);
    if (over && right) {
      correctAns.play();
    }
  },[over, right]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[950px] px-2">
        <h1 className="text-center text-3xl py-4 text-black">
          Review learning
        </h1>
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
            <SwiperSlide key={index} className="border-2 rounded-lg">
              <div className="grid grid-cols-12 gap-3 px-1">
                <div className="col-span-6 h-[400px]  relative ">
                  <Image
                    src={item.image}
                    fill
                    alt="slide image"
                    className="object-contain object-center"
                  />
                </div>
                <div className="col-span-6 flex justify-center items-center flex-col gap-4">
                  <h3 className="text-black font-bold text-2xl text-center">
                    {item.text}
                  </h3>
                  {options.map((i, indx) => (
                    <div className="flex flex-col gap-3" key={indx}>
                      <button
                        disabled={over ? true : false}
                        className={`${
                          right == indx && over
                            ? " bg-green-500 "
                            : wrong === indx && over
                            ? "bg-red-600"
                            : i.a === SlideData[lastSlide].answer && over
                            ? "bg-green-500"
                            : "bg-yellow-400"
                        }  min-w-[150px] text-black text-lg rounded-lg text-center relative focus:border-2 focus:border-black`}
                        onClick={() => handleCheck(i.a, indx)}
                      >
                        {i.a}
                        <h4
                          className={` ${
                            right == indx && over
                              ? "block text-green-600 "
                              : wrong === indx && over
                              ? "block text-red-500"
                              : "hidden"
                          }  absolute right-[-130px] top-0 text-black   `}
                        >
                          {right == indx
                            ? "Correct Answer"
                            : wrong == indx
                            ? "Wrong Answer"
                            : ""}
                        </h4>

                        {over && i.a === SlideData[lastSlide].answer && (
                          <h4 className="block text-green-600 absolute right-[-130px] top-0 ">
                            Correct Answer
                          </h4>
                        )}
                      </button>
                    </div>
                  ))}
                  <div>
                    {!over ? (
                      <h4 className="p-1 flex justify-center items-center text-black border-2 timer border-green-400 text-3xl w-[70px] h-[70px] rounded-full relative ">
                        <span className="text-black font-bold "> {time}</span>
                      </h4>
                    ) : (
                      <h4 className="text-4xl  text-black font-bold ">
                        Time is over
                      </h4>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div>
              <FaArrowLeft
                className={`hidden
                } text-[40px]  cursor-pointer `}
                onClick={handlePerv}
              />
            </div>
            <div
              className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90 
               `}
            >
              <FaArrowRight
                className={` text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
