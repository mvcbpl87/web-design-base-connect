import { TitleCard } from "./title-card";
import { ImageTemplate } from "../global/image-template";
import { Icons } from "@/lib";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
type ItemContentProps = {
    source: string,
    alt:string,
    title: string,
    description: string,
    size?:string
}
const ItemContent = ({source, alt, title, description,size}:ItemContentProps) =>{
 return(
 <div className="relative flex flex-col space-y-[1rem]  justify-center">
 <ImageTemplate
  size={size}
  source={source}
  alt={alt}
  fit="object-fit"
 />
 <h6 className="text-desktop-h4 leading-desktop-h4 font-bold">{title}</h6>
 <p className="text-regular">{description}</p>
 </div>
 )
}
const ItemList:ItemContentProps[] = [
    {
      title:'Email Management',
      description:'Our team of virtual assistants can handle various administrative tasks, allowing you to focus on core business activities.',
      alt:'icon-image' ,
      source: Icons.rectangle,
      size: 'h-10 w-10'
    },
    {
        title:'Data Entry',
        description:'Streamline your data processes with our expert data entry services. We ensure accurate and timely handling of all your data needs, allowing you to focus on core business strategies.',
        alt:'icon-image' ,
        source: Icons.calendar
    },
    {
        title:'Scheduling and Document',
        description:'Our virtual assistants can handle your scheduling, document management, and more.',
        alt:'icon-image' ,
        source: Icons.database
    },
    {
        title:'Website Maintenance',
        description:'Ensure your website operates flawlessly with our comprehensive maintenance services. We manage updates, security, and performance, so your site always delivers the best user experience.',
        alt:'icon-image' ,
        source: Icons.monitor
    },
    {
        title:'Web Research',
        description:'Unlock valuable insights with our detailed web research services. We gather and analyse the latest data relevant to your industry, providing you with the information you need to stay ahead.',
        alt:'icon-image' ,
        source: Icons.search
    },
    {
        title:'Personal Assistant',
        description:'Enhance your productivity with our personal assistant services. From managing schedules to handling daily tasks, our professionals help you focus on what matters most in your business.',
        alt:'icon-image' ,
        source: Icons.person
    },
    
 ]
export default function SiteSection4(){
 const IconSize = 'h-12 w-12';

 return(
 <div className="relative  px-20 py-20 space-y-[4rem]">
  <div className="w-[840px]">
    <TitleCard
     badge="Efficient Solutions"
     title="Streamline Your Administrative Tasks with Our Services"
     subheadings="We offer a range of solutions to help businesses save time and increase productivity. Our team of experienced virtual assistants can handle various administrative tasks, allowing you to focus on core business activities."
    />
  </div>
  <div className="grid grid-cols-3 gap-[2rem]">
    { ItemList.map( (item,index)=>(
        <ItemContent
         size={item.size? item.size : IconSize}
         key = {`itemContent-${index+1}`}
         title={item.title}
         description={item.description}
         source={item.source}
         alt={item.alt}
        />
    )
    )}
  </div>
  <div className="flex gap-2 flex-col">
    <span className="text-regular font-bold text-accent-base">Something else? Let{`'`} talk!
    </span>
    <div>
        <Link href={'#'} className={cn(buttonVariants({variant:'ghost'}), 'text-regular p-6 rounded-none border-muted-foreground border-[1px] text-center hover:bg-accent-base hover:text-white')}>
        Schedule a Consultation
        </Link>
    </div>
  </div>
 </div>
 )
}