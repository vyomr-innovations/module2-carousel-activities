"use client"
import React, { useState } from 'react'

import ImageSlide from './slide'
import VideoSlide from './video'

const CarouselC16L2A1 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("videoSlide")
    return (
      <div>
      {isFirstScreen == "videoSlide" && <VideoSlide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "imageSlide" && <ImageSlide />}
      </div>
    )
}

export default CarouselC16L2A1
