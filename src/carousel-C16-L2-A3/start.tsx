
import React from "react";
type myProps = {
  setIsFirstScreen: (value: string) => void;
};
const Start = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10 bg-[#F8FAFC]">
      <div className="  shadow-black shadow-md min-w-[400px] text-center rounded-lg ">
      <h1 className="text-3xl text-black text p-8">Etiquettes</h1>
      </div>
      <div className="border border-black rounded-lg px-8 py-1 shadow shadow-[#000000b9] bg-yellow-400 hover:scale-90">
        <h3  className="text-[30px]  cursor-pointer text-black"
          onClick={() => setIsFirstScreen("Gallary")}>Start</h3>
      </div>
    </div>
  );
};

export default Start;
