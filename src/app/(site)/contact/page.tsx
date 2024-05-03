import { Mail, MapPin, Pin, PointerIcon } from "lucide-react";
import ContactForm from "./site-components/contact-form";
import { ImageTemplate } from "@/components/global/image-template";
import { AvatarTemplate } from "@/components/global/avatar-template";

export default function ContactPage(){
 return(
 <div className="relative py-20 px-20 space-y-[10rem] ">
  <div className="grid grid-cols-2 gap-[1rem] relative">
    <div className="h-full">
      <div className="flex flex-col space-y-[2rem] pr-[10rem] sticky top-20">
       <h2 className="text-desktop-h2 leading-desktop-h2 font-bold">Get in Touch</h2>
       <p className="text-lg">
           If you have any questions or want to get onboarded. 
           Leave your contact details and our team will get 
           back to you as soon as possible. <br/><br/>
           Or you can schedule a consultation at a time that is convenient for you.
       </p>
       <div>
          <div className="flex items-center gap-2"><Mail size={15}/> <span className="text-base">branson@baseconnect.ai</span></div>
          <div className="flex items-center gap-2"><MapPin size={15}/> <span className="text-base">Kuching, Malaysia</span></div>
       </div>
      </div>
     </div>
    <div>
        <ContactForm/>
    </div> 
  </div> {/* End of Upper Section */}
  {/* <------ Review Section --------> */}
  <div className="w-full pb-20 flex items-center justify-center ">
    <ReviewCards/>
  </div>
 </div>   
 )
}


function ReviewCards(){
 return(
 <div className="w-[768px] flex flex-col items-center justify-center space-y-[2rem]">
  <ImageTemplate
   size=" w-[280px] h-[54px]" 
   fit = 'object-contain'
   source="/assets/vicprop.svg"
   alt="Collabs-logo"
  />
  <h5 className="text-desktop-h5 leading-h5 font-bold text-center">
   We worked with Grace and she is an invaluable addition to any real estate firm seeking an operations specialist. 
   Her instant communication & proficiency in both English and Mandarin further enhance her value. 
  </h5>
  <div className="flex flex-col items-center gap-2">
    <AvatarTemplate
     source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     name="avtar"
     className="h-[56px] w-[56px] bg-accent-base text-white"
    />
    <span className="text-base font-semibold">Steve Miao</span>
    <span className="text-base">Property Manager, VICPROP Melbourne</span>
  </div>
 
 </div>
 )
}