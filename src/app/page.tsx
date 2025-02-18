import Link from "next/link";
import LinkData from "@/routeData/links.json"

export default function Home() {

  return (
<div className="min-h-screen flex justify-start p-5 items-center bg-[url(/bg/bg-image.jpg)] bg-cover bg-center">

<div className=" w-[800px]  flex justify-center gap-5 items-center flex-wrap min-h-full p-5">
  
{
  LinkData.map((item,index)=>(
    
    <Link 
    className="bg-purple-500 py-2 px-5 rounded-lg hover:bg-purple-700 "
    key={index} 
    href={`/${item.link}`}>{item.link}</Link>
  ))
}

  </div>
</div>
  );
}
