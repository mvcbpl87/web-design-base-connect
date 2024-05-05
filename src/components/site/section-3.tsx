import { ImageTemplate } from "../global/image-template";
import { TitleCard } from "./title-card";

export default function SiteSection3(){

 return(
 <div className="relative md:h-[840px] grid md:grid-cols-2 
 p-10
 md:px-20 md:py-[6rem] gap-[2rem] md:gap-[8rem]">
 <div className=" hidden md:flex flex-col justify-center h-[348px] md:h-full relative">
   <ImageTemplate
    size="h-full absolute w-full"
    source = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="image"
   />
 </div>
 <div className="flex flex-col justify-center space-y-[2rem]">
  <TitleCard
     badge={null}
     title = "Our Services: Simplifying Your Workload and Boosting Productivity"
     subheadings="Our virtual assistants provide professional administrative support, allowing you to focus on what matters most."
   />
  <div className="grid md:grid-cols-2 gap-[2rem]">
    <div className="flex flex-col gap-2">
      <h2 className="text-mobile-h2 leading-mobile-h2 font-bold md:text-desktop-h2 md:leading-desktop-h2">50%</h2>
      <span className="text-regular">
        Efficient task management
        Streamlined processes
        Time and cost savings
        </span>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="text-mobile-h2 leading-mobile-h2 font-bold md:text-desktop-h2 md:leading-desktop-h2">50%</h2>
      <span className="text-regular">
        Improved organization
        Increased efficiency
        Enhanced productivity
        </span>
    </div>
  </div>
 </div>
 <div className=" flex md:hidden flex-col justify-center h-[348px] md:h-full relative">
   <ImageTemplate
    size="h-full absolute w-full"
    source = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="image"
   />
 </div>
 </div>
 )
}
