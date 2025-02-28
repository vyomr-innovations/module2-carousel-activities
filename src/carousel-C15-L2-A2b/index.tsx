"use client";
import React, { useState } from "react";
import SlideC15 from "./slideC15";
import VidioPage from "./vidio";

const CarousalC15L1A2B = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("video");
  return (
    <div>
      {isFirstScreen == "QusSlide" && <SlideC15 />}
      {isFirstScreen == "video" && (
        <VidioPage setIsFirstScreen={setIsFirstScreen} />
      )}
    </div>
  );
};

export default CarousalC15L1A2B;
