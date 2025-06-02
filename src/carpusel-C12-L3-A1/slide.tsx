"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { ChangeEvent, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SlideThreeMath from "./slideThreeMath";
import SlideThreeFood from "./slideThreeFood";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    swiperRef.current?.slideNext();
    window.scrollTo(0,0)
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center gap-5 items-center flex-col p-10">
      <h4 className="text-xl font-bold text-center text-black">
        {lastSlide === 0
          ? "How to do a very hard thing?"
          : lastSlide === 1
          ? "Apply the steps to do a very hard thing"
          : lastSlide === 2
          ? "Try doing one hard task with - I can do it - chanting in head"
          : ""}
      </h4>

      <div className="w-[900px] bg-white">
        <div className="rounded-lg border p-5">
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
              <div className="flex justify-center items-center flex-col gap-10 min-h-[500px]">
                <h4 className="text-2xl text-left w-full text-black">
                  <span className="font-bold">Step 1:</span> Think of one very hard thing. What do you find most difficult?
                </h4>
                <h4 className="text-2xl text-left w-full text-black">
                  <span className="font-bold">Step 2:</span> Imagine yourself completing the task successfully. Describe how you executed the task <strong>&lsquo;mentally&rsquo;</strong>
                </h4>
                <h4 className="text-2xl text-left w-full text-black">
                  <span className="font-bold">Step 3:</span> Try doing one hard task while positive self-talk - I can do it - chanting in head
                </h4>
                <h4 className="text-2xl text-left w-full text-black">
                  <span className="font-bold">Step 4:</span> Reflect - hard task successfully done, setting high expectations from oneself!
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center gap-10 flex-col">
                <div className="flex justify-center items-center flex-col gap-3">
                  <h4 className="text-xl text-center w-full text-black">
                    <span className="font-bold">Step 1:</span> Think of one very hard thing. What do you find most difficult?
                  </h4>
                  <div className="flex gap-2 min-w-[500px]">
                    <input
                      type="radio"
                      value="math"
                      onChange={handleRadioChange}
                      checked={selected === "math"}
                      name="check"
                      className="w-5 cursor-pointer"
                      id="r1"
                    />
                    <label className="text-black text-xl font-medium" htmlFor="r1">
                      Working a multi-step math problem
                    </label>
                  </div>

                  <div className="flex gap-2 min-w-[500px]">
                    <input
                      type="radio"
                      value="food"
                      onChange={handleRadioChange}
                      checked={selected === "food"}
                      name="check"
                      className="w-5 cursor-pointer"
                      id="r2"
                    />
                    <label className="text-black text-xl font-medium" htmlFor="r2">
                      Ordering food at a restaurant in a limited budget
                    </label>
                  </div>
                </div>

                <div className="flex justify-center items-center flex-col gap-3">
                  <h4 className="text-xl text-center w-full text-black">
                    <span className="font-bold">Step 2:</span> Now imagine yourself completing the task successfully. Describe how you executed the task &lsquo;mentally&rsquo;.
                  </h4>
                  <Image src="/C12Images/math.png" width={300} height={100} alt="C12 image" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {selected === "math" ? <SlideThreeMath /> : selected === "food" ? <SlideThreeFood /> : null}
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center gap-10 flex-col min-h-[300px]">
                <div className="flex justify-center items-center flex-col gap-3">
                  <h4 className="text-xl text-center font-bold w-full text-black">
                    Reflect - hard task successfully done, setting high expectations from oneself!
                  </h4>
                </div>

                <ul className="list-disc space-y-5">
                  <li className="text-black text-xl">How did you work out the solution?</li>
                  <li className="text-black text-xl">Did imagining yourself solving it successfully help?</li>
                  <li className="text-black text-xl">Did telling yourself &lsquo;You can do it!&rsquo; help?</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`${ 
              lastSlide > 0 ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400" : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handlePrev}
            />
          </div>

          {(lastSlide !== 3 && (lastSlide !== 1 || selected)) && (
            <div
              className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90"
              onClick={handleNext}
            >
              <FaArrowRight className="text-[40px] cursor-pointer text-black" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;