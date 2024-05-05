import { cn } from "@/lib/utils"

type Props = {
    title: string,
    subheadings: string,
    badge: string | null,
    className?: string
}
export function TitleCard({
    badge, 
    title, 
    subheadings,
    className
}: Props){
 const style = cn("w-full flex flex-col space-y-[1.2rem]",className)
 if(!badge || badge == undefined)
 return(
 <div className={style}>
    <h3 className="text-mobile-h3 leading-mobile-h3 font-bold md:text-desktop-h3 md:leading-desktop-h3 ">{title}</h3>
    <p className="text-medium font-normal">{subheadings}</p>
 </div>
 )
 return(
 <div className={style}>
    <span className="text-regular font-semibold">{badge}</span>
    <h2 className="text-mobile-h2 leading-mobile-h2 font-bold md:text-desktop-h2 md:leading-desktop-h2">{title}</h2>
    <p className="text-medium font-normal">{subheadings}</p>
 </div>
 )
}