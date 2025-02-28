"use client";
import React, { useState } from "react";
import SlideC15 from "./slideC15";
import Start from "./start";

const CarousalC15L1A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("Start");
  return (
    <div>
      {isFirstScreen == "QusSlide" && <SlideC15 />}
      {isFirstScreen == "Start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
    </div>
  );
};

export default CarousalC15L1A3;
