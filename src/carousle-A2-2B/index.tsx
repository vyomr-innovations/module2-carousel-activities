"use client"
import React, { useState } from 'react'
import A22ASlide from './a2Slide'
import StartSlid from './startSlid'
import EmotinsImage from './emotinsImage'
import Result2B from './result'

const CrouselA22B = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <A22ASlide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "emotionImage" && <EmotinsImage setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "result" && <Result2B setIsFirstScreen={setIsFirstScreen}/>}
    </div>
  )
}

export default CrouselA22B
