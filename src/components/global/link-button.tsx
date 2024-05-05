import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
const variantEnum = {
    primary: 'primary',
    secondary: 'secondary'
}
type CustomLinkButtonType = {
    path:string,
    label:string,
    variant?: 'primary'| 'secondary'
}
export function CustomLinkButton({path, label, variant}:CustomLinkButtonType){
 const style = cn(
    buttonVariants({variant:"outline"}),{
    'bg-accent-base border-none text-background rounded-none font-regular p-4 md:p-6': variant === variantEnum.primary,
    'rounded-none text-regular p-6 border-muted-foreground border-[1px] hover:bg-accent-base hover:text-white' 
    : variant=== variantEnum.secondary || !variant || variant == undefined

 })
 return(
 <Link 
 href={path} 
 className={style}>
 {label}
</Link>
 )
}