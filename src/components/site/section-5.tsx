import { TitleCard } from "./title-card";
import PricingTable from "../global/pricing-table";
import { GettingStartedBanner } from "./getting-started-banner";
  

export default function SiteSection5(){
 return(
 <div className="relative p-10 md:px-20 space-y-[8rem]">
  <div className="space-y-[4rem]">
   <TitleCard
    className="justify-center items-center"
    badge="Flexible price plans & packages"
    title = "Pricing plan"
    subheadings="A real assistant, dedicated to you."
   />    
  <PricingTable/>
  </div>
  <GettingStartedBanner className="py-20"/>
 </div>)
}

