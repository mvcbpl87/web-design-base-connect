import { GettingStartedBanner } from "@/components/site/getting-started-banner";
import SiteBanner from "./site-components/site-banner";
import SiteStory from "./site-components/site-story";
import SiteValues from "./site-components/site-values";
import { MetricTable } from "@/components/global/metric-table";
import SiteReview from "./site-components/site-review";


export default function AboutUsPage(){
 return(
 <div className="relative flex flex-col ">
 <SiteBanner className="mb-20 md:mb-[6rem]"/>
  <div className="px-10  md:px-20 space-y-[4rem] md:space-y-[6rem] ">
   <SiteStory className="pb-20"/>
   <SiteValues className="pb-20"/>
   <SiteReview className="pb-20"/>
   <MetricTable/>
   <GettingStartedBanner className=" pb-20"/>
  </div>
 
 </div>
 )
}