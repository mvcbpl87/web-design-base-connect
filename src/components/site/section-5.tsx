import { TitleCard } from "./title-card";
import PricingTable from "../global/pricing-table";
import { GettingStartedBanner } from "./getting-started-banner";
  

export default function SiteSection5(){
 return(
 <div className="relative px-20 py-12 space-y-[4rem]">
   <TitleCard
    className="justify-center items-center"
    badge="Flexible price plans & packages"
    title = "Pricing plan"
    subheadings="A real assistant, dedicated to you."
   />    
  <PricingTable/>
  <GettingStartedBanner className="py-[10rem]"/>
 </div>)
}

