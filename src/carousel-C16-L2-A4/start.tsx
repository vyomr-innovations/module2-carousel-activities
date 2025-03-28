import React from 'react'
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const StrartSlide = ({setIsFirstScreen}:myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
    <div className="  shadow-black shadow-md rounded-lg p-5 text-center w-[600px]">
    <h2 className="text-2xl text-black">Let’s play a game to review what we have learned! Tell me the best response to each situation.</h2>
    </div>
    <div className="border border-black rounded-lg px-8 py-1 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
      <h3  className="text-[30px]  cursor-pointer text-black"
        onClick={() => setIsFirstScreen("Slide")}>Start</h3>
    </div>
  </div>
  )
}

export default StrartSlide
