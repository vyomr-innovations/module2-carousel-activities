import React from 'react'

const Page = () => {
  return (
     <div className="min-h-screen flex  justify-center items-center flex-col bg-[#F8FAFC] gap-10">
<h3 className='text-3xl text-black'>Video of story</h3>
       <div className="w-[600px] min-h-[400px] rounded-lg overflow-hidden">
         <video
           src="/C15L1A1B/video.mp4"
           className="w-full  object-cover"
           autoPlay
           
           controls
         ></video>
       </div>
      
     </div>
   );
}

export default Page
