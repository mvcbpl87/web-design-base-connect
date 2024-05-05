import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const information = {
    title : 'Base Connect Vs Hiring',
    description: `  Hiring is difficult, time-consuming and expensive. From flexibility to cost, 
    Base Connect offers many advantages.`
}

const metrics = [
 {
    concern: 'Monthly Cost',
    baseConnect: 'Starting from $549 to $2,100',
    fullTimeHire: '$3000+',
 },
 {
    concern: 'Time to Start',
    baseConnect: 'Instant',
    fullTimeHire: '4-8 Weeks',
 },
 {
    concern: 'Grow, Shrink or Cancel anytime',
    baseConnect: 'Yes',
    fullTimeHire: 'No',
 },
 {
    concern: 'Work with multiple Assistants',
    baseConnect: 'Yes (and it’s free)',
    fullTimeHire: 'No',
 },
 {
    concern: 'No Hidden Costs',
    baseConnect: 'Yes',
    fullTimeHire: 'Yes',
 },
 {
    concern: 'Replacement',
    baseConnect: 'Easy',
    fullTimeHire: 'Difficult',
 },
 {
    concern: 'Free Trial',
    baseConnect: 'Yes',
    fullTimeHire: 'No',
 }
]
export function MetricTable(){
 return(
 <>
 <MobileMetricTable/>
 <DesktopMetricTable/>
 </>
 )
}

function DesktopMetricTable(){
   return(
   <div className="hidden md:block relative h-full pb-20 space-y-[4rem]">
    <div className="w-full flex flex-col space-y-[1.2rem] justify-center items-center">
     <h2 className="text-desktop-h2 font-bold leading-desktop-h2">{information.title}</h2>
     <p className="text-medium font-normal w-[40%] text-center">{information.description}</p>
    </div>
    <Table>
      <TableHeader>
          <TableRow className="border-none">
              <TableHead className="w-[600px]">
               <div className="grid grid-rows-[60px_40px]">
                  <h6 className="row-start-2 text-desktop-h6 leading-desktop-h6 text-black dark:text-white">Concerns</h6>
               </div>
              </TableHead>
              <TableHead>
              <div className="grid grid-rows-[60px_30px] text-center">
                  <h3 className="text-desktop-h3 leading-desktop-h3 font-bold text-black dark:text-white">Base Connect</h3>
               </div>
              </TableHead>
              <TableHead>
              <div className="grid grid-rows-[60px_30px] text-center">
                  <h3 className="text-desktop-h3 leading-desktop-h3 font-bold text-black dark:text-white">Full Time Hire</h3>
               </div>
              </TableHead>
          </TableRow>
      </TableHeader>
      <TableBody>
      { metrics.map( (metric,index)=>(
        <TableRow
         key = {`metric-${index+1}`}
         className={cn({
          'bg-table-cell-var2': index%2 === 0,
          'bg-transparent' : index %2 !== 0
         })}
        >
         <TableCell className="text-regular font-normal">{metric.concern}</TableCell>
         <TableCell className=" font-bold text-base text-accent-base text-center">{metric.baseConnect}</TableCell>
         <TableCell className="text-regular font-bold text-center">{metric.fullTimeHire}</TableCell>
        </TableRow>
        )
      )}
      </TableBody>
    </Table>
   </div>
   )
}

function MobileMetricTable(){
 return(
 <div className="block md:hidden relative h-full pb-20 space-y-[4rem]">
  <div className="w-full flex flex-col space-y-[1.2rem] justify-center items-center">
   <h2 className="text-center text-mobile-h2 leading-mobile-h2 md:text-desktop-h2 font-bold md:leading-desktop-h2">{information.title}</h2>
   <p className="text-lg font-normal md:w-[40%] text-center">{information.description}</p>
  </div>

  {/* Mobile Table View */}
  <div>
   <div className="grid grid-cols-2 pb-4">
    <div className="grid grid-rows-[1fr_65px]">
    <h3 className="text-center text-mobile-h4 leading-mobile-h4 md:text-desktop-h3 md:leading-desktop-h3 font-bold text-black dark:text-white">Base Connect</h3>
    <h6 className=" flex items-end 
    text-mobile-h6 leading-mobile-h6
    md:text-desktop-h6 md:leading-desktop-h6 text-black dark:text-white">Concerns</h6>
    </div>
    <div className="grid grid-rows-[34px_94px]">
    <h3 className="text-center text-mobile-h4 leading-mobile-h4 md:text-desktop-h3 md:leading-desktop-h3 font-bold text-black dark:text-white">Full Time Hire</h3>
    </div>
   </div>
   {/* All Table Content (*Mobile View) */}
   <div>
   { metrics.map( (metric, index)=>(
      <MobileTableItem
       key = {`metric-${index+1}`}
       className={cn({
        'bg-table-cell-var2': index%2 === 0,
        'bg-transparent' : index %2 !== 0
       })}
       concern={metric.concern}
       baseConnect={metric.baseConnect}
       fullTimeHire={metric.fullTimeHire}
      />
   ))
   }

   </div>

  </div>
 </div>
 )
}

type MobileTableItemProps = {
   className?:string
   concern:string,
   baseConnect:string,
   fullTimeHire:string
}
function MobileTableItem({className, concern, baseConnect, fullTimeHire}:MobileTableItemProps){
 const style = cn(className)
 return(
 <div className={style}>
  <div className="grid grid-cols-2 text-base">
    <div className="col-span-2 p-4">{concern}</div>
    <div className="p-4 font-semibold text-center flex items-center justify-center">
    { baseConnect === 'Yes' ? <Check size={24}/> :( baseConnect === 'No' ? null : baseConnect)}
    </div>
    <div className="p-4 font-semibold text-center flex items-center justify-center">
    { fullTimeHire === 'Yes' ? <Check size={24}/> :( fullTimeHire === 'No' ? null : fullTimeHire)}

    </div>
  </div>
 </div>
 )
}