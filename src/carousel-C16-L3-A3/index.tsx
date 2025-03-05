"use client"
import React, { useState } from 'react'
import Start from './start';
import Gallary from './gallary';

const CarouselC16L3A3 = () => {
    const [isFirstScreen, setIsFirstScreen] = useState("Start");
    return (
      <div>
      
        {isFirstScreen == "Start" && <Start setIsFirstScreen={setIsFirstScreen} />}
        {isFirstScreen == "Gallary" && <Gallary/>}
      </div>
    );
}

export default CarouselC16L3A3
