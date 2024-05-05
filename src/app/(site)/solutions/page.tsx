import { ImageTemplate } from "@/components/global/image-template"
import SiteBanner from "./site-components/site-banner"
import { GettingStartedBanner } from "@/components/site/getting-started-banner"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"


const SolutionItemList = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Virtual Assistant Services',
        subtitle : 'Delegate tasks and enhance productivity.',
        description: 'Our virtual assistants handle your administrative duties, freeing you to focus on core business activities.'
    },
    {
        imageUrl : 'https://images.unsplash.com/photo-1558949623-35b2e2649754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title : 'Data Entry and Organization',
        subtitle : 'Streamline data management for accuracy and efficiency.',
        description: 'Our experts organize and manage your data, ensuring precision and accessibility.'
    },
    {
        imageUrl:'https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Customer Support Services',
        subtitle: 'Deliver superior service with our dedicated support team.',
        description: 'Our customer support professionals provide outstanding service, ensuring customer satisfaction and loyalty.'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title :' Project Management Support',
        subtitle:' Efficiently manage projects from start to finish.' ,
        description: 'Our skilled project managers ensure your projects meet deadlines and budgets, allowing you to focus on strategic goals.'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title :'Content Creation and Management' ,
        subtitle: 'Boost your brand with compelling content.',
        description : 'Our team delivers engaging, high-quality content across various platforms, enhancing your digital presence.'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title : 'Market Research and Insights' ,
        subtitle: 'Unlock market insights to guide your strategy.',
        description: 'Leverage our market research expertise to understand trends, consumer behavior, and competitors, supporting informed decision-making.'
    },

]
export default function SolutionsPage(){
 return(
 <div className="relative ">
 <SiteBanner/>
  <div className="py-20 px-10 md:px-20 space-y-[4rem] md:space-y-[6rem] ">
    <div className="grid md:grid-cols-2 gap-[1rem] md:pb-20 md:gap-[0rem] md:py-10">
        <h2 className="text-mobile-h2 leading-mobile-h2 
         md:text-desktop-h2 lmd:eading-desktop-h2 font-bold">
         What can we help you with?</h2>
        <p className="text-base md:text-lg font-normal">
            Our outsourcing services can help your company focus on core tasks by taking care of administrative responsibilities. 
            From managing emails to scheduling appointments, we have you covered.
        </p>
    </div>
    {/* <---- Solution Cards -----> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] md:gap-y-[8rem]">
    { SolutionItemList.map( (solution, index)=>(
        <SolutionCard
         key ={`solutionCard-${index+1}`}
         title={solution.title}
         subtitle={solution.subtitle}
         description={solution.description}
         imageUrl={solution.imageUrl}
        />
    ))}
    </div>
    <div className="flex gap-[1rem] flex-col">
    <span className="text-base font-bold text-accent-base">Not sure if we can help?
    </span>
    <div>
        <Link href={'#'} className={cn(buttonVariants({variant:'ghost'}), 
        'text-regular p-6 rounded-none border-muted-foreground border-[1px] text-center hover:bg-accent-base hover:text-white')}>
        Schedule a Consultation
        </Link>
    </div>
  </div>
    <GettingStartedBanner className="py-20"/>

  </div>
 </div>
 )
}

type SolutionCardType ={
    imageUrl: string,
    title:string,
    subtitle:string,
    description:string
}

function SolutionCard({
    imageUrl,
    title,
    subtitle,
    description
}: SolutionCardType){
 return(
 <div className="space-y-[1rem]">
    <div className="relative h-[198px] md:h-[240px] ">
        <ImageTemplate
            source={imageUrl}
            alt="image-solutions"
            size="w-full h-full absolute"
            fit= 'object-cover'
        />
    </div>
    <h4 className="text-mobile-h4 leading-mobile-h4
    md:text-desktop-h4 md:leading-desktop-h4 font-bold">{title}</h4>
    <div className="flex flex-col gap-1">
     <span className="font-bold text-base">{subtitle}</span>
     <p className="text-base font-normal">{description}</p>
    </div>
 </div>
 )
}
