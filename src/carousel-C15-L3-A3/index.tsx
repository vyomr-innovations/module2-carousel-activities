"use client";
import React, { useState } from "react";
import SlideC15 from "./slideC15";
import Start from "./start";

const CarousalC15L3A3 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("Start");
  return (
    <div>
      {isFirstScreen == "Start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen == "QusSlide" && <SlideC15 />}
    </div>
  );
};

export default CarousalC15L3A3;
