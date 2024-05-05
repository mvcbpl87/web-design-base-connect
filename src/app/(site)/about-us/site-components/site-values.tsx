import { ImageTemplate } from "@/components/global/image-template"
import { cn } from "@/lib/utils"

const _constant = {
    imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
const ItemContentList = [
 {
    title: 'Client First',
    description: 'Your success is our success. We put your needs first.'
 },
 {
    title: 'Quality Work',
    description: 'We promise top-notch work from our virtual assistants. No shortcuts.'
 },
 {
    title: 'Honesty',
    description: 'We believe in clear communication and fair pricing. No hidden costs.'
 },
 {
    title: 'Effectiveness',
    description: 'We focus on getting tasks done right and on time.'
 },
 
]
type Props = {
   className?:string
}
export default function SiteValues({className}:Props){
 const style = cn('relative grid grid-cols-1 md:grid-cols-2 gap-[2rem]', className);
 return(
 <div className={style}>
  <div className=" flex flex-col relative gap-[2rem] md:pr-20 ">
    <h2 className="text-mobile-h2 leading-mobile-h2 md:text-desktop-h2 md:leading-desktop-h2 font-bold">Our Values</h2>
    <div className="h-[320px] md:h-[400px] relative">
    <ImageTemplate
        size= "absolute w-full h-full"
        fit="object-cover"
        source={_constant.imageUrl}
        alt="our-values-img"
    />
    </div>
  </div>
  <div className="flex flex-col justify-between  ">
     <p className="text-base md:text-lg">
        At Base Connect, our values aren{`'`}t just words - they{`'`}re the backbone of how we work. 
        We believe in putting our clients first, delivering quality work, and being honest and straightforward. <br/><br/>

        We are committed to taking care of your tasks effectively and value the teamwork it 
        takes to support and grow your business. These values guide us in all that 
        we do - every task, every project, every day. Here{`'`}s how we make it happen:<br/><br/>
     </p>
     <div className="grid md:grid-cols-2 gap-4 pt-10 md:pt-0">
     { ItemContentList.map( (item, index)=>(
        <ItemContent
         key ={`ItemValues-${index+1}`}
         title={item.title}
         description={item.description}
        />
     ))

     }
     </div>
    </div>
 </div>
 )
}

type ItemContentProps = {
    title:string,
    description:string
}
function ItemContent({title, description}:ItemContentProps){
 return(
 <div className="flex flex-col gap-[1rem]"> 
    <h6 className="text-desktop-h6 leading-desktop-h6 font-bold">{title}</h6>
    <p className="text-base">{description}</p>
 </div>
 )
}