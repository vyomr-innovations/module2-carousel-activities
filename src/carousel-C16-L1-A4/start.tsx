"use client";
import React from "react";
import "swiper/css";

import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
const StartSlide = ({ setIsFirstScreen }: SlideProps) => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[500px] ">
        <div className="p-5 relative text-black flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">  
        <p className="text-center text-xl py-4 text-black  "> Let’s play a game to review what we have learned! Select the best response to each situation.
        </p>
          
        </div>

        <div className=" py-4 flex items-center justify-around  text-black">
          <div
            className={`border border-black rounded-full p-3 shadow shadow-[#000000b9] hover:scale-90 bg-yellow-400`}
          >
            <FaArrowRight
              className="text-[40px]  cursor-pointer "
              onClick={() => setIsFirstScreen("QustionSlide")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSlide;
