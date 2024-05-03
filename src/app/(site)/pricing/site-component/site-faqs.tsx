import { CustomLinkButton } from "@/components/global/link-button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
type FaqsListType = {
    question:string,
    answer:string
}
const FaqsList:FaqsListType[] = [
    {
        'question': 'How much does it cost?',
        'answer': 'answer 1'
    },
    {
        'question': 'Are there any hidden fees?',
        'answer': 'answer 2'
    },
    {
        'question': 'Do you offer discounts?',
        'answer': 'answer 3'
    },
    {
        'question': 'How can I pay?',
        'answer': 'answer 4'
    },
    {
        'question': 'What if I need additional services?',
        'answer': 'asnwer 5'
    }
]

export function SiteFaqs(){
 return(
 <div className="relative h-full pb-20 grid grid-cols-[500px_1fr] gap-[4rem] justify-center items-center">
  <div className="space-y-[1rem]">
    <h2 className="text-desktop-h2 leading-desktop-h2">FAQs</h2>
    <p className="text-lg">
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
    <AccordionTrigger className="text-lg font-bold px-4">{item.question}</AccordionTrigger>
    <AccordionContent className="px-4 text-base my-4">
      {item.answer}
    </AccordionContent>
   </AccordionItem>
 ))
 }
</Accordion> 
 )
}