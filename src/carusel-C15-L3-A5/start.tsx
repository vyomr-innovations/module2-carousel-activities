import React from "react";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const Start = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
      <div className="  shadow-black shadow-md rounded-lg min-w-[300px] text-center">
      <h1 className="text-3xl text-black text p-8">Quotes</h1>
      </div>
      <div className="border border-black rounded-lg px-8 py-1 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
        <h3  className="text-[30px]  cursor-pointer text-black"
          onClick={() => setIsFirstScreen("slide")}>Start</h3>
      </div>
    </div>
  );
};

export default Start;
