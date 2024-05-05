import Link from "next/link"
import { ImageTemplate } from "../global/image-template"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

export default function SiteSection1(){
 return(
 <div className="relative">
    <ImageTemplate 
     size="min-h-screen"
     fit="object-cover"
     alt="Banner-site-1"
     source = "https://images.unsplash.com/photo-1461782296610-c552d61b149a?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     />
     <div className="bg-black/40 absolute inset-0 grid md:grid-cols-2">
    <div className="h-full flex flex-col justify-center p-10 md:px-20 space-y-[2rem]">
     <h1 className="text-wrap text-left text-white 
     text-mobile-h1 leading-mobile-h1
     md:text-desktop-h1 md:leading-desktop-h1 ">
        Feeling <br/>Overwhelmed? <br/>Hire an Assistant Today</h1>
        <p className="text-white text-medium font-light">
        Focus on what matters most while our virtual assistants handle your administrative tasks efficiently.
        </p>
        <div className="flex flex-col md:flex-row  gap-4 ">
            <Link href="#" className={cn(buttonVariants({variant:"outline"}), 'bg-accent-base border-none text-background rounded-none font-regular p-6')}>
                Schedule a Consulation
            </Link>
            <div>
            <Link href="#" className={ cn(buttonVariants({variant:"outline"}), 'rounded-none bg-transparent text-white font-regular p-6')}>
                View Profile
            </Link>
            </div>
        </div>
    </div>
        
     </div>
 </div>
 )
}