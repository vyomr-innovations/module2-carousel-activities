import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen p-8  bg-[#FAF8FC] flex gap-10 justify-start flex-col  items-center">
      <h2 className="text-3xl text-black ">Video of Story</h2>
      <div className="">
        <video
          src="/C16/video.mp4"
          controls
          autoPlay
          className="rounded-lg shadow-black shadow-md"
        ></video>
      </div>
    </div>
  );
};

export default Page;
