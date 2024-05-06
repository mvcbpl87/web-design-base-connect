import { CustomLinkButton } from "@/components/global/link-button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
type FaqsListType = {
    question:string,
    answer:string
}
const FaqsList:FaqsListType[] = [
    {
        'question': 'How much does it cost?',
        'answer': 'Stay tuned'
    },
    {
        'question': 'Are there any hidden fees?',
        'answer': 'Stay tuned'
    },
    {
        'question': 'Do you offer discounts?',
        'answer': 'Stay tuned'
    },
    {
        'question': 'How can I pay?',
        'answer': 'Stay tuned'
    },
    {
        'question': 'What if I need additional services?',
        'answer': 'Stay tuned'
    }
]
type Props = {
 className?:string
}
export function SiteFaqs({className}:Props){
 const style = cn("relative h-full grid md:grid-cols-[500px_1fr] gap-[4rem] justify-center items-center", className)
 return(
 <div className={style}>
  <div className="space-y-[1rem]">
    <h2 className="text-mobile-h2 leading-mobile-h2 md:text-desktop-h2 md:leading-desktop-h2">FAQs</h2>
    <p className="text-base md:text-lg">
     Find answers to common pricing-related questions 
     to better understand our value proposition.
    </p>
    <CustomLinkButton
     label="Schedule a Consultation"
     path="#"
    />
  </div>
  <div className="border-black/20 dark:border-white/20 border-t-[1px] py-2">
    <AccordionFAQ list ={FaqsList}/>
  </div>
    
 </div>
 )
}

type AccordionFAQProps = {
    list: FaqsListType[]
}
function AccordionFAQ({list}:AccordionFAQProps){
 return(
 <Accordion type="single" collapsible >
 { list.map( (item, index)=>(
   <AccordionItem 
    key = {`faqs-${index+1}`}
    value={`item-${index+1}`} 
    className="border-black/20 dark:border-white/20">
    <AccordionTrigger className="text-start text-base md:text-lg font-bold px-4">{item.question}</AccordionTrigger>
    <AccordionContent className="px-4 text-base my-4 italic text-muted-foreground/50">
      {item.answer}
    </AccordionContent>
   </AccordionItem>
 ))
 }
</Accordion> 
 )
}