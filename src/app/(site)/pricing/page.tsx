import PricingTable from "@/components/global/pricing-table";
import { TitleCard } from "@/components/site/title-card";
import { SiteGraphic } from "./site-component/site-graphic";
import { MetricTable } from "./site-component/site-metric-table";
import { SiteFaqs } from "./site-component/site-faqs";
import { GettingStartedBanner } from "@/components/site/getting-started-banner";

export default function Page(){
 return(
 <div className="relative py-20 px-20 space-y-[10rem] ">
 <div className="pb-20 space-y-[4rem]">
  <TitleCard
    className="justify-center items-center"
    badge="Flexible price plans & packages"
    title = "Pricing plan"
    subheadings="A real assistant, dedicated to you."
   /> 
    <PricingTable/>
 </div>
   <SiteGraphic/>
   <MetricTable/>
   <SiteFaqs/>   
   <GettingStartedBanner className="pb-20"/>
 </div>
 )
}
