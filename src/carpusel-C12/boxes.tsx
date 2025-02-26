import React from "react";

const btns = [
  { name: "Believe" },
  { name: "Immediately" },
  { name: "Curious" },
  { name: "Sharp" },
  { name: "Boost" },
  { name: "Powerup" },
  { name: "Incredible " },
  { name: "Memorable " },
  { name: "Unbeatable  " },
  { name: "Adorable  " },
  { name: "Marvellous  " },
];

type myProps = {
  setIsFirstSlide: (value: string) => void;
};
const Boxes = ({ setIsFirstSlide }: myProps) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center flex-col  justify-center ">


<div className="w-[800px]  flex flex-wrap gap-3 justify-center items-center p-5">
{
    btns.map((i,index)=>(
        <div key={index} className="bg-red-400 px-10 py-1 rounded-lg text-2xl">
            {i.name}
        </div>
    ))
}
</div>

<div className="h-[150px]  flex justify-center items-center">
                <button  className="bg-yellow-400 px-5 py-1 rounded-lg text-black text-xl shadow shadow-black" onClick={()=>setIsFirstSlide("slide")}>Go to slides</button>
            </div>

    </div>
  );
};

export default Boxes;
