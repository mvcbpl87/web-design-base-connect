import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { Star } from "@/components/global/assets"
import { AvatarTemplate } from "@/components/global/avatar-template"
import { ImageTemplate } from "@/components/global/image-template"
import { Separator } from "@/components/ui/separator"

  
const reviewList = [
 {
    ratings: 5,
    testimony: 'We worked with Grace and she is an invaluable addition to any real estate firm seeking an operations specialist. Her instant communication & proficiency in both English and Mandarin further enhance her value.',
    avatarUrl: '/assets/avatars/1.png',
    name: 'Steve Miao',
    position: 'Property Manager, VICPROP Melbourne',
    logo: '/assets/vicprop.svg'
 },
 {
    ratings: 5,
    testimony: 'We worked with Grace and she is an invaluable addition to any real estate firm seeking an operations specialist. Her instant communication & proficiency in both English and Mandarin further enhance her value.',
    avatarUrl: '/assets/avatars/1.png',
    name: 'Steve Miao',
    position: 'Property Manager, VICPROP Melbourne',
    logo: '/assets/vicprop.svg'
 }
 
]

type Props = {
    className?:string
}

export default function SiteReview({className}:Props){
 const style = cn("relative space-y-[4rem]", className)
 return(
 <div className={style}>
 <h3 className="text-center text-mobile-h3 leading-mobile-h3 md:text-desktop-h3 md:leading-desktop-h3 font-bold">
  Here is what our previous clients had to say!
 </h3>
 <Carousel className="mx-4 md:mx-0">
  <CarouselContent>
  { reviewList.map( (review, index)=>(
    <CarouselItem key = {`reviewCard-${index+1}`} className="flex justify-center items-center">
    <ReviewCard
     ratings={review.ratings}
     testimony={review.testimony}
     avatarUrl={review.avatarUrl}
     name={review.name}
     position={review.position}
     logo={review.logo}
    />
    </CarouselItem>
  ))

  }
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext  />
 </Carousel>
 </div>
 )
}

export type ReviewCardProps = {
 className?:string,
 ratings:number,
 testimony:string,
 avatarUrl:string,
 name:string,
 position:string,
 logo:string
}
function ReviewCard({
 className,
 ratings,
 testimony,
 avatarUrl,
 name,
 position,
 logo
}:ReviewCardProps){
 const style = cn('w-full h-[480px] md:h-[300px] md:w-[768px] flex flex-col md:justify-between items-center gap-[1rem]', className);
 
 const RateStar = ({ratings}:{ratings:number}) => <div className="flex gap-2">
 { Array.from({length:ratings}).map((_,index)=> (
   <div 
      className="h-[18.89px] w-[20px]"
      key={`Star-${index+1}`}><Star/></div> ))
 }
   </div>

 return(
 <div className={style}>
  <RateStar ratings={ratings}/>
  <h5 className="text-center text-mobile-h5 leading-mobile-h5 md:text-desktop-h5 md:leading-desktop-h5 font-bold">{testimony}</h5>
  <div className="flex flex-col md:flex-row items-center flex-wrap gap-[1rem]">
    <AvatarTemplate
     source={avatarUrl}
     name={name}
    />
    <div className="flex flex-col text-center  text-base ">
     <span className="font-semibold">{name}</span>
     <span>{position}</span>
    </div>
    <Separator className="hidden md:block mx-[1rem] w-[1px] bg-black dark:bg-white" orientation="vertical" />
    <ImageTemplate
     size=" w-[268px] h-[54px]" 
     fit = 'object-contain'
     source={logo}
     alt="Collabs-logo"
    />
  </div>
 </div>
 )
}