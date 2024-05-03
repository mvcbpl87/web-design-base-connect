import { ImageTemplate } from "../global/image-template";
import { TitleCard } from "./title-card";

export default function SiteSection3(){

 return(
 <div className="relative h-[864px] grid grid-cols-2 px-20 py-[8rem] gap-2 gap-x-[8rem]">
 <div className=" flex flex-col justify-center items-star relative">
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
  <div className="grid grid-cols-2 gap-[1rem]">
    <div className="flex flex-col gap-2">
      <h2 className="text-desktop-h2 leading-desktop-h2 font-bold">50%</h2>
      <span className="text-regular">
        Efficient task management
        Streamlined processes
        Time and cost savings
        </span>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="text-desktop-h2 leading-desktop-h2 font-bold">50%</h2>
      <span className="text-regular">
        Improved organization
        Increased efficiency
        Enhanced productivity
        </span>
    </div>
  </div>
 </div>
 </div>
 )
}
