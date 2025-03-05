"use client";
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";


type myProps ={
  setOpen:(value:boolean)=>void;
  open:boolean,
  img:string
}

const GallaryModle = ({open,setOpen,img}:myProps) => {
  return (
    <Dialog  open={open} onOpenChange={setOpen}>
    <DialogContent  className="max-w-[800px] w-full bg-[#00000067] backdrop-blur-sm text-black ">
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription className="flex  justify-center items-center">
        <div className="w-full max-w-[380px]"> 
              <Image
                src={img}
                width={800} // Image Fixed Width
                height={600} // Image Fixed Height
                alt="modal image"
                className="w-full rounded-lg object-cover" // Image Responsive aur Rounded
              />
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default GallaryModle
