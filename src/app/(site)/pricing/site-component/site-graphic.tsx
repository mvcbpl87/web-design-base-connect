import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const Information = [
    {
        title: 'Productive Time',
        progress : 50,
        color: 'bg-accent-base'
    },
    {
        title: 'Downtime, holidays & paid leaves',
        progress : 30,
        color: 'bg-accent-base'
    },
    {
        title: 'Sickness, lateness and unplanned absense',
        progress : 20,
        color: 'bg-accent-base'
    }
]
type Props = {
  className?:string
}
export function SiteGraphic({className}:Props){
 const style = cn("relative h-full grid grid-cols-1 md:grid-cols-3 gap-[2rem] justify-center items-center", className)
 return(
 <div className={style}>
  <div className="md:col-span-2 flex flex-col text-start md:text-center gap-4 pb-10 md:pr-10 md:pb-0">
    <h3 className="text-mobile-h3 leading-mobile-h3  md:text-desktop-h3 md:leading-desktop-h3 font-bold ">
        Your money goes much further with a virtual assistant.
    </h3>
    <p className="text-base md:text-large">
     Getting a virtual assistant through Base Connect can save you lots of cash. 
     On average, our clients <span className="font-bold">save about 90% </span>compared to hiring a full-time assistant. <br/><br/>
 
     Here{`'`}s the big difference: you only  pay for the actual work your Base Connect virtual assistant does. 
     No extra costs for coffee breaks, chatting, holidays, or sick days. <br/><br/>
 
     Considering the average salary of a skilled executive assistant could be <span className="font-bold">$60,500</span> in 2024, 
     it makes sense to save where you can.<br/><br/>
 
     So, stop wasting money. Use Base Connect and make your cash go further.
    </p>
           
  </div>
  <div className="  bg-accent-base/10 ">
    <div className="bg-accent-base py-4 px-10 flex flex-col gap-2 text-white dark:text-black">
     <span className="text-large font-bold">$50 invested with Base Connect</span>
     <ProgressBar
        title="Productive Time"
        progress={100}
        indicatorColor="bg-primary-progress"
     />
    </div>
    <div className="bg-transparent py-4 px-10  flex flex-col gap-2">
     <span className="text-large font-bold">$50 invested in an employee</span>
     { Information.map( (info, index)=>(
       <ProgressBar
          key ={`Infobar-${index+1}`}
          title={info.title}
          progress={info.progress}
          indicatorColor={info.color}
          bgColor="bg-bg-progress"
         />
     )
     )}
    </div>
  </div>
 </div>

 )
}

type ProgressBarType = {
    progress: number,
    title: string,
    bgColor?:string,
    indicatorColor?:string,
}
function ProgressBar({progress, title, bgColor, indicatorColor}:ProgressBarType){
 return(
 <div className="flex flex-col gap-2">
  <span className="text-regular ">{title}</span>
  <div className="relative flex flex-col flex-1">
    <Progress 
     value={progress} 
     indicatorColor={indicatorColor}
     bgColor={bgColor}
     roundedIndicator={true}
     className="h-[24px]" />
    <div className="absolute inset-0 text-regular text-center text-white " 
     style={{width:`${(progress || 0)}%`}}
    >
     {progress}%
    </div>
  </div>
 </div>
 )
}