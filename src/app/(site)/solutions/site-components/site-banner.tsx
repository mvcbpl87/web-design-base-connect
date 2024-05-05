import { ImageTemplate } from "@/components/global/image-template"
const _constant = {
   ImageUrl: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
export default function SiteBanner(){
 return(
 <div className="relative ">
    <ImageTemplate 
     size=" h-[358px]"
     fit="object-cover"
     alt="Banner-site-1"
     source = {_constant.ImageUrl}
     />
    <div className="bg-black/40 absolute inset-0 flex flex-col gap-[1rem]
    md:gap-[0rem]
    md:grid md:grid-cols-2 justify-center items-center md:space-y-[2rem]">
     <h1 className="text-wrap text-center md:text-start text-white
      text-mobile-h2 leading-mobile-h2
      md:text-desktop-h1 md:leading-desktop-h1 px-10 md:px-20 ">
      Streamline Your Operations
     </h1>
     <p className="text-white text-base md:text-xl text-center md:text-start px-10 md:px-20 ">
         Discover the benefits of outsourcing administrative tasks to our experienced team.
         Increase efficiency and focus on what matters most for your business.
     </p>
     </div>
 </div>
 )
}