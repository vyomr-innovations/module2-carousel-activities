import React from "react";
import { FaArrowRight } from "react-icons/fa6";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const VidioPage = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-[#F8FAFC]">
      <div className="w-[600px] min-h-[400px] rounded-lg overflow-hidden">
        <video
          src="/C15L1A1B/video.mp4"
          className="w-full  object-cover"
          autoPlay
          
          controls
        ></video>
      </div>
      <div className="border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
        <FaArrowRight
          className="text-[40px]  cursor-pointer text-black"
          onClick={() => setIsFirstScreen("QusSlide")}
        />
      </div>{" "}
    </div>
  );
};

export default VidioPage;
