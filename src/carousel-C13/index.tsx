
"use client"
import ColorSlide from '@/carousel-C13/colorSlide'
import React, { useState } from 'react'
import ResultC13 from './result'

const CarousaleC13=() => {

    const [isFirstScreen,setIsFirstScreen]=useState("colorSlid")

  return (
    <div>
    {isFirstScreen ==="colorSlid" && <ColorSlide setIsFirstScreen={setIsFirstScreen}/>}  
    {isFirstScreen ==="result" && <ResultC13 setIsFirstScreen={setIsFirstScreen}/>}  
    </div>
  )
}

export default CarousaleC13