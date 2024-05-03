import { Icons } from "@/lib";
import { ImageTemplate } from "../global/image-template";
import { TitleCard } from "./title-card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
type ItemContentProps = {
    source: string,
    alt:string,
    title: string,
    description: string,
    size?:string
}
const ItemContent = ({source, alt, title, description,size}:ItemContentProps) =>{
 return(
 <div className="relative flex flex-col space-y-[1rem]">
 <ImageTemplate
  size={size}
  source={source}
  alt={alt}
 />
 <h6 className="text-desktop-h6 font-bold">{title}</h6>
 <p className="text-regular">{description}</p>
 </div>
 )
}
export default function SiteSection2(){

 return(
 <div className="relative h-[864px] grid grid-cols-2 px-20 py-[8rem] gap-x-[8rem] ">
 <div className="flex flex-col justify-between ">
 <TitleCard
    badge="Efficiency"
    title = "Streamline Your Administrative Tasks with Ease"
    subheadings="Our personalized virtual assistant services provide efficient solutions for all your administrative tasks. With a dedicated team of professionals, we ensure that your tasks are handled with utmost care and precision."
  />
  <div className="flex gap-4">
    <ItemContent
     size="h-12 w-12"
     title = "Save Time"
     description="Delegate your administrative tasks to our skilled virtual assistants and focus on what matters most."
     source={Icons.hourGlass}
     alt="icon"
    />
     <ItemContent
     size="h-12 w-12"
     title = "Increase Productivity"
     description="Our virtual assistants help you stay organized and efficient, allowing you to accomplish more."
     source={Icons.checkbox}
     alt="icon"
    />
  </div>
  <div>
  <Link href={'#'} className={cn(buttonVariants({variant:"outline"}), 'rounded-none text-regular p-6 border-muted-foreground border-[1px] hover:bg-accent-base hover:text-white')}>View Plans</Link>
  </div>
 </div>
 <div className=" flex flex-col justify-center  relative">
 <ImageTemplate
 size="h-full absolute w-full"
 source = "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="image"
 />
 </div>
 </div>
 )
}
