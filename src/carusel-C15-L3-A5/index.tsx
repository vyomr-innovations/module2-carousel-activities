"use client"
import React, { useState } from 'react'
import Start from './start'
import SlideC15L3A5 from './quotesSlide'

const CaruselC15L3A5 = () => {
    const [isFirstScreen,setIsFirstScreen]=useState("start")
  return (
    <div className=' bg-[#F8FAFC] flex justify-center items-center'>
{isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
{isFirstScreen == "slide" && <SlideC15L3A5 />}
      
    </div>
  )
}

export default CaruselC15L3A5
