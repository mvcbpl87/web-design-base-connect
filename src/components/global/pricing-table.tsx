import { PricingList } from "@/lib";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function PricingTable(){
 return(
 <div className="grid md:grid-cols-2 gap-[2rem]">
  { PricingList.map( (item,index) => (
    <Card key ={`price-${index+1}`} className="border-black/90 rounded-none dark:border-white" >
     <CardHeader>
     <div className=" py-6">
     <div className="text-mobile-h6 md:text-desktop-h6 font-bold text-center">{item.title}</div>
     <div className="flex flex-col justify-center items-center">
         <h1 className="text-mobile-h1 leading-mobile-h1 md:text-desktop-h1 md:leading-desktop-h1 font-bold">
             {item.price}
             { item.price !== 'Free' &&   <span className="text-mobile-h4 md:text-desktop-h4">/mo</span>
             }
           
         </h1>
         <p className="text-regular">{item.description}</p>
     </div>
     </div>
     </CardHeader>
     <CardContent className="flex flex-col md:h-[14rem] space-y-[1rem] px-10">
     {item.features.map( (feature,index)=>(
         <div
          key = {`feature-${index+1}`}
          className="flex items-center gap-2 text-regular">
             <Check className="color-black" size={15}/>
             <span>{feature}</span>
         </div>)
     )}
     </CardContent>
     <CardFooter>
         <Button className=" w-full rounded-none bg-accent-base">Get Started</Button>
     </CardFooter>
    </Card>)
  )}
 </div>
 )
}