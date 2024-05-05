"use client"
import Link from "next/link"
import { route } from "@/lib/route"
import { ImageTemplate } from "../global/image-template"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomLinkButton } from "../global/link-button"
import { useState } from "react"

const _routes = [
    {
        route: route.AboutUs,
        label: "About Us"
    },
    {
        route: route.Pricing,
        label: "Pricing"
    },
    {
        route: route.Solutions,
        label: "Solutions"
    }
]
export default function MobileNav(){
 const [openNav, setOpenNav] = useState(false);
 const style = cn("bg-background w-full h-full z-[100] md:hidden transition ease-in-out transition-all",{
    'fixed': openNav == true
 })
 return(
 <div className={style}>
    <div className="flex items-center justify-between w-full 
    px-5 md:px-20 h-[72px] bg-background py-2">
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
    <Button variant={"ghost"} size={'icon'} onClick={()=>setOpenNav(!openNav)} ><Menu/></Button>
    </div>
   
    </div>
    <MobileNavContent className={cn({
        'hidden': !openNav
    })}/>
 </div>
 )
}

type MobileNavContentProps = {
    className?:string
}
function MobileNavContent({className}:MobileNavContentProps){
 const style = cn("border-border border-t-[1px] h-full", className)
 return(
 <div className={style}>
  <nav className=" h-[204px] ">
   <div className="flex flex-col h-full justify-evenly items-center ">
    { _routes.map( (item, index)=>(
      <Link 
       className="text-lg"
       href={item.route} 
       key={`link-${index+1}`}>
        {item.label}</Link>
    ))

    }
   </div>
  </nav>
 </div>
 )
}