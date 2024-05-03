'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"
import Link from "next/link"
import { route } from "@/lib/route"
import { CustomLinkButton } from "../global/link-button"

export default function NavigationBar({}){
 return(
 <div className="flex items-center justify-between h-[72px] py-4 px-20 bg-background">
   <Link
    href={route.Home}>
   <ImageTemplate 
     size = "w-[200px] h-[30px] "
     source="/assets/base-connect-logo.svg"
     alt="Company logo"
    />
   </Link>
  
    <NavigationLinks/>
    <CustomLinkButton
      path={route.Contact}
      label="Contact Us"
      variant={"primary"}
    />
 </div> 
 ) 
}

type ImageProps = {
    source:string,
    alt:string,
    size?:string,
    fit?:string
}
function ImageTemplate({source,alt,size, fit}:ImageProps){
    const style = cn('relative', size,  {
        ' h-8 w-8': !size || size === undefined,
    })
    return(
    <div className={style}>
        <Image
            fill 
            src={source}
            alt={alt}
            className="absolute w-full"
            // objectFit={fit? fit: 'object-cover'}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    </div>
    )
}

export function NavigationLinks(){
 return(
 <NavigationMenu >
 <NavigationMenuList >
   <NavigationMenuItem >
     <NavigationMenuTrigger className="text-regular">
     <Link href={route.AboutUs}>About Us</Link>
     </NavigationMenuTrigger>
   </NavigationMenuItem>
   <NavigationMenuItem>
     <NavigationMenuTrigger className="text-regular">Why Us?</NavigationMenuTrigger>
   </NavigationMenuItem>
   <NavigationMenuItem>
     <NavigationMenuTrigger className="text-regular" >
      <Link href={route.Pricing}>Pricing</Link>
     </NavigationMenuTrigger>
   </NavigationMenuItem>
   <NavigationMenuItem>
     <NavigationMenuTrigger className="text-regular">
     <Link href={route.Solutions}>Solutions</Link>
     </NavigationMenuTrigger>
   </NavigationMenuItem>
 </NavigationMenuList>
  </NavigationMenu>
 )
}