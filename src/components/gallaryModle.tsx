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
    <DialogContent  className="min-w-[800px] w-full min-h-[500px]  bg-[#00000067] backdrop-blur-sm text-black ">
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription className="flex  justify-center items-center">
        <div className="relative w-full min-w-[300px] min-h-[500px] h-full"> 
              <Image
                src={img}
               fill // Image Fixed Height
                alt="modal image"
                className="w-full rounded-lg object-contain" // Image Responsive aur Rounded
              />
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default GallaryModle
