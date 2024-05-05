import Link from "next/link"
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
type BannerProps = {
   className?: string
}
export function GettingStartedBanner({className}:BannerProps){
 const style = cn('grid grid-cols-1 md:grid-cols-2 gap-[2rem]', className)
 return(
 <section className={style}>
    <div className="flex items-start">
       <h2 className="text-mobile-h2 leading-mobile-h2 md:text-desktop-h2 md:leading-desktop-h2 font-bold md:pr-20">Get Started with Us Today</h2>
    </div>
    <div className="space-y-[2rem] flex flex-col items-start justify-center">
       <p className="text-base md:text-lg">
        Experience the convenience and efficiency of our virtual assistant services. Schedule a consultation to see how we can help you!
       </p>
       <div>
       <Link 
        href={'#'} 
        className={cn(buttonVariants({variant:'ghost'}), 
        'text-regular p-6 rounded-none border-muted-foreground border-[1px] text-center hover:bg-accent-base hover:text-white')}>
        Schedule a Consultation
       </Link>
       </div>
    </div>  
</section>
 )
}