"use client"
import React, { useState } from 'react'
import StrartSlide from './start'
import Slide from './slide'

const CarouselC16L2AA= () => {
    const [isFirstScreen,setIsFirstScreen] =useState("start")
    return (
      <div>
        {isFirstScreen == "start" && <StrartSlide setIsFirstScreen={setIsFirstScreen}/> }
        {isFirstScreen == "Slide" && <Slide/> }
      </div>
    )
}

export default CarouselC16L2AA
