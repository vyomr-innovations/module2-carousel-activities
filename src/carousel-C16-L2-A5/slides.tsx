"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L2-A5/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStart() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [yes, setYes] = useState<null | string>(null);
  const [no, setNo] = useState<null | string>(null);

  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);
  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      //   setIsFirstScreen("emotionImage");
    }
    swiperRef.current?.slideNext();
  };

  const HandleYes = (val: string) => {
    if (SlideData[lastSlide]?.value === val) {
      setYes(val);
      setNo(null);
      // setTimeout(() => {
      //   swiperRef.current?.slideNext();
      //   setThumbsupChek(false); // Reset color after slide change
      // }, 1000);
      correctAudio?.play();
    }
  };

  const handleNo = (val: string) => {
    if (SlideData[lastSlide]?.value === val) {
      setNo(val);
      setYes(null);
      correctAudio?.play();
    }
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[900px] ">
        <h1 className="text-center text-3xl  min-h-[60px] py-4 text-black">
        Polite or Not
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
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 w-full h-full  border p-2 rounded-lg">
                <div className="col-span-6  w-full h-[400px] relative">
                  <h3 className="text-white text-xl text-center  absolute w-full">
                    {item.text}
                  </h3>
                  <Image
                    src={item.image}
                    fill
                    className="rounded-lg object-cover"
                    
                    alt="slider image"
                  />
                </div>
                <div className="col-span-6 flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-black text-lg">POLITE OR NOT ?</h3>
                  <div className=" flex justify-around items-center  w-full">
                    <h4 className="text-black text-lg">Your Response :</h4>
                    <div className=" py-4 flex items-center justify-around  gap-6 text-black">
                      <div
                        className={`border border-black rounded-full p-3 w-[40px] h-[40px] flex items-center justify-center  shadow shadow-[#000000b9] hover:scale-90
              ${no == item.value ? "bg-green-300" : ""}  bg-yellow-400`}
                      >
                        <h3
                          className="text-lg font-bold  cursor-pointer "
                          onClick={() => handleNo("Thumbs down")}
                        >
                          No
                        </h3>
                      </div>
                      <div
                        className={`border border-black rounded-full p-3 w-[40px] h-[40px] flex items-center justify-center  shadow shadow-[#000000b9] hover:scale-90
                            ${
                              yes == item.value ? "bg-green-300" : ""
                            }  bg-yellow-400`}
                      >
                        <h3
                          className="text-lg font-bold cursor-pointer  "
                          onClick={() => HandleYes("Thumbs down")}
                        >
                          Yes{" "}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-around items-center  w-full">
                    <h4 className="min-w-[100px] text-center text-black text-lg">
                      Why?
                    </h4>
                    <textarea
                      className="text-black min-w-[200px] min-h-[100px] rounded-lg p-2 border-black border-2"
                      name="text"
                      id="text"
                      placeholder="Type your caption here"
                    />
                  </div>
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
