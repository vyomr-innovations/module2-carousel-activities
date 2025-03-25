"use client"
import React, { useState } from 'react'
import A22ASlide from './a2Slide'
import StartSlid from './startSlid'
import EmotinsImage from './emotinsImage'

const CrouselC13L2A22B = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <A22ASlide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "emotionImage" && <EmotinsImage />}
    </div>
  )
}

export default CrouselC13L2A22B
