import { GettingStartedBanner } from "@/components/site/getting-started-banner";
import SiteBanner from "./site-components/site-banner";
import { MetricTable } from "../pricing/site-component/site-metric-table";
import SiteStory from "./site-components/site-story";
import SiteValues from "./site-components/site-values";


export default function AboutUsPage(){
 return(
 <div className="relative ">
 <SiteBanner/>
  <div className="py-20 px-20 space-y-[10rem] ">
   <SiteStory/>
   <SiteValues/>
   <MetricTable/>
   <GettingStartedBanner className="pb-20"/>
  </div>
 
 </div>
 )
}