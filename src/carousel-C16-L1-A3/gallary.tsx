import GallaryModle from "@/components/gallaryModle";
import Image from "next/image";
import React, { useState } from "react";

const Gallary = () => {
  const [open, setOpen] = useState(false);
  const [img,setImg]=useState("")
  const handleClick = (imgUrl:string) => {
    setImg(imgUrl)
    setOpen(true);
  };
  return (
    <div className="min-h-screen relative  p-5 bg-[#F8FAFC] flex justify-start flex-col gap-10 items-center">
      <h3 className="text-4xl text-center min-h-[80px] text-black">
        Etiquettes
      </h3>
      <div className="grid grid-cols-12 gap-5  h-[300px] place-items-center">
        <div className="col-span-6">
          <div
            onClick={()=>handleClick("/C16/home_rule.jpg")}
            className="relative w-[160px] h-[160px] bg-red-500 rounded-lg overflow-hidden shadow-md shadow-black cursor-pointer hover:scale-105"
          >
            <Image
              src="/C16/home_rule.jpg"
              fill
              className="object-cover"
              alt="gallery"
            />
          </div>
          <h5 className="text-black text-center text-lg p-3">Home</h5>
        </div>

        <div className="col-span-6">
          <div
            onClick={()=>handleClick("/C16/class_rule.jpg")}
            className="relative w-[160px] h-[160px] bg-red-500 rounded-lg overflow-hidden shadow-md shadow-black cursor-pointer hover:scale-105"
          >
            <Image
              src="/C16/class_rule.jpg"
              fill
              className="object-cover"
              alt="gallery"
            />
          </div>
          <h5 className="text-black text-center text-lg p-3">Class</h5>
        </div>
      </div>
      <GallaryModle setOpen={setOpen} open={open} img={img} />
    </div>
  );
};

export default Gallary;
