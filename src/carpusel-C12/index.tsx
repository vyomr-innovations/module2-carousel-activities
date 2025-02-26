"use client"
import React, { useState } from 'react'
import SlideC12L2A3 from './slide'
import Boxes from './boxes'

const CarouselC12L2A3 = () => {
  const [isFirstSlide,setIsFirstSlide]= useState("slide")
  return (
    <div>
      {isFirstSlide === "slide" && <SlideC12L2A3 setIsFirstSlide={setIsFirstSlide} />}
      {isFirstSlide === "Boxes" && <Boxes setIsFirstSlide={setIsFirstSlide} />}
    </div>
  )
}

export default CarouselC12L2A3
