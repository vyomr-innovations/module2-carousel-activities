"use client"
import React, { useState } from 'react'
import A22ASlide from './a2Slide'
import StartSlid from './startSlid'


const CrouselC16L1AA = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <A22ASlide />}
     
    </div>
  )
}

export default CrouselC16L1AA
