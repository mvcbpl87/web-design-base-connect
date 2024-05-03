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
 <div className="relative h-full pb-20 space-y-[4rem]">
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