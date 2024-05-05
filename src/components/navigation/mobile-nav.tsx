'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link"
import { ImageTemplate } from "../global/image-template"
import { route } from "@/lib/route"
import { CustomLinkButton } from "../global/link-button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils";
  
export default function MobileNav(){
 const [isMounted, setIsMounted] = useState(false);
 const [open, setOpen] = useState(false);
 useEffect(()=> setIsMounted(true), []);
 if(!isMounted) return;
 return(
 <div className=" relative md:hidden h-[72px] bg-background ">
  <div className="absolute flex items-center justify-between w-full h-full px-5 md:px-20 z-[100]">
    <Link
     href={route.Home}>
     <ImageTemplate 
      size = "w-[138px] h-[22px] "
      source="/assets/base-connect-logo.svg"
      alt="Company logo"
     />
    </Link>
    <div className="flex items-center gap-[1rem]">
    <CustomLinkButton
       path={route.Contact}
       label="Contact Us"
       variant={"primary"}
     />
     <NavSheetComponent
      isOpen={open}
      setOpen={()=>console.log('click')}
     />
     <Button 
     className={cn({
        'hidden':!open
     })}
     variant={"ghost"} size={'icon'} 
     onClick={()=>setOpen(false)}
     ><X/></Button>
    </div>
  </div>
 </div>
 )
}

type NavSheetProps = {
    isOpen?:boolean,
    setOpen?: ()=>void
}
function NavSheetComponent({
    isOpen, 
    setOpen
}:NavSheetProps){
 return(
 <Sheet >
   <SheetTrigger asChild>
     <Button 
     className={cn({
        'hidden':isOpen
     })}
     variant={"ghost"} size={'icon'} >
        <Menu/>
    </Button>
   </SheetTrigger>
   <SheetContent 
    side={'top'} 
    className="h-full pt-[100px] "
    custom = {true}
    classNameCustom=" top-0 right-0 fixed h-[72px] w-full inset-0 z-[400] "
    childrenCustom = {
     <div className=" flex py-5 px-8 items-center justify-end">
        <Button 
            className="bg-green-200 "
            variant={"ghost"} 
            size={'icon'} 
            ><X/></Button> 
     </div>
      
    }
    >
     <SheetHeader>
       <SheetTitle>Are you absolutely sure?</SheetTitle>
       <SheetDescription>
         This action cannot be undone. This will permanently delete your account
         and remove your data from our servers.
       </SheetDescription>
     </SheetHeader>
   </SheetContent>
 </Sheet>
 )
}