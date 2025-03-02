"use client"
import React, { useState } from 'react'
import StrartSlide from './start'
import ImageSlide from './slide'
import VideoSlide from './video'

const CarouselC16L1A1B = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("strartSlide")
    return (
      <div>
      {isFirstScreen == "strartSlide" && <StrartSlide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "videoSlide" && <VideoSlide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "imageSlide" && <ImageSlide />}
      </div>
    )
}

export default CarouselC16L1A1B
