import { ImageTemplate } from "@/components/global/image-template"
import { cn } from "@/lib/utils"
type Props = {
   className?:string
}
export default function SiteBanner({className}:Props){
 const style = cn("relative", className)
 return(
 <div className={style}>
    <ImageTemplate 
     size="h-[358px]"
     fit="object-cover"
     alt="Banner-site-1"
     source = "https://images.unsplash.com/photo-1626440873815-48c6635d4737?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     />
    <div className="bg-black/40 absolute inset-0 flex flex-col justify-center items-center space-y-[2rem]">
     <h1 className="text-wrap text-center px-10 md:px-[14rem] text-white 
     text-mobile-h4 leading-mobile-h4 md:text-desktop-h1 md:leading-desktop-h1  ">
        We are firm believers that every business owner should be free from admin duties.
     </h1>
     <p className="text-white text-base md:text-lg font-light">
     ...so you can focus on what truly matters.
     </p>
     </div>
 </div>
 )
}