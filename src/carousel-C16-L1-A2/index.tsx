"use client"
import React, { useState } from 'react'
import Start from './start';
import Slide from './slide';

const CarouselC16L1A2 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("Start");
  return (
    <div>
    
      {isFirstScreen == "Start" && <Start setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "startSlide" && <Slide/>}
    </div>
  );
}

export default CarouselC16L1A2
