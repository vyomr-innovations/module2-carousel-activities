import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen bg-[#F8FAFC] flex flex-col gap-8 justify-start items-center p-8 '>
        <h3 className='text-3xl text-black'>Video of story</h3>
      <div className=" shadow-black shadow-md rounded-lg overflow-hidden">
      <iframe  width="560" height="315" src="https://www.youtube.com/embed/LOcFLnfkUhY?si=inyRs2H0jt4j-2ih" title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Page
