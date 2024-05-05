import { cn } from "@/lib/utils"
type Props = {
   className?:string
}
export default function SiteStory({className}:Props){
 const style = cn("relative grid grid-cols-1 md:grid-cols-2 gap-[2rem] ",className)
 return( 
 <div className={style}>
    <div>
        <h2 className="text-mobile-h2 leading-mobile-h2 md:text-desktop-h2 md:leading-desktop-h2 font-bold">Our Story</h2>
    </div>
    <div>
     <p className="text-base md:text-lg">
        Here at Base Connect, we get it. Running a business is no walk in the park. With so many moving parts, 
        it can be challenging to juggle them all. That{`'`}s exactly why we built this agency.<br/><br/>

        We saw first hand how hardworking business owners were getting bogged down in tasks that took them away 
        from their main focus: growing their business. So we decided to do something about it.<br/><br/>

        We{`'`}re here to take on the heavy lifting of connecting with your customers in today{`'`}s digital world. 
        We{`'`}re here to streamline your processes and lighten your load, allowing you to focus on what you do best.<br/><br/>

        At Base Connect, we{`'`}re more than just an agency - we{`'`}re your partners in navigating your business towards a successful futur
     </p>
    </div>
 </div> 
 )
}