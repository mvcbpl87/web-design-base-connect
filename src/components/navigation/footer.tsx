import Link from "next/link"
import { ImageTemplate } from "../global/image-template"
import { Icons } from "@/lib";
import { Separator } from "@/components/ui/separator"

export default function NavigationFooter(){
 return(
 <div className="relative py-10 px-20">
  <div className="flex items-center justify-between">
    <ImageTemplate 
     size = "w-[200px] h-[30px] "
     source="/assets/base-connect-logo.svg"
     alt="Company logo"
    />
    <div className="flex items-center gap-4">
    { ['Home', 'About Us', 'Why Us?', 'Pricing', 'Solutions'].map( (link, index)=>(
      <Link 
       key={`linkfooter-${index+1}`} 
       href="#" 
       className="text-regular font-semibold">
      {link}
      </Link>)
    )} 
    </div>
    <div className="flex items-center gap-4">
    { [Icons.Facebook, Icons.Instagram, Icons.X, Icons.LinkedIn].map((media, index)=>(
      <Link href="#" key ={`linkMedia-${index+1}`}>
       <ImageTemplate
        source={media}
        alt="media-icon"
       />
      </Link>)
    )}
    </div>
  </div>{/* End First SubSection */}
  <Separator className="mt-[4rem] mb-[2rem] bg-black dark:bg-white"/>
  <div className="flex items-center justify-center gap-4">
    <span className="text-small">© 2024 Base Connect. All rights reserved.</span>
    <div className="flex gap-4">
    { ['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map( (publish, index)=>(
      <Link 
       href="#" 
       key={`publish-${index+1}`}
       className="decoration-1 underline text-small"
      >
      {publish}
      </Link>
    ))

    }
    </div>
  </div>
 </div>
 )
}