"use client";
import React from "react";
import "swiper/css";

import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
const StartSlid = ({ setIsFirstScreen }: SlideProps) => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[500px] ">
        <div>
       
          <div className="p-5 relative text-black flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
          <p className="text-center text-2xl py-4 text-black ">{`Let’s learn how to practice empathy! `}</p>
          </div>
        </div>

        <div className=" py-4 flex items-center justify-around  text-black">
          <div
            className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400`}
          >
            <FaArrowRight
              className="text-[40px]  cursor-pointer "
              onClick={() => setIsFirstScreen("slide")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSlid;
