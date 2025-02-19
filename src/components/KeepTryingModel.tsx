"use client";
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";


type myProps ={
open:boolean;
setOpen:( value :boolean)=>void;
}

const KeepTryingModel = ({open,setOpen}:myProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">Keep Trying!</DialogTitle>
        <DialogDescription className="flex  justify-center items-center">
          <Image
            src="/C13-L1-A2/Keep_Trying.jpg"
            width={300}
            height={200}
            alt="modle image"
            className="rounded-lg"
          />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default KeepTryingModel
