import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type AvatarTemplateProps = {
    source:string, 
    name?:string,
    className?:string
}
export function AvatarTemplate({source, name, className}:AvatarTemplateProps){
    const style = cn(className)
    return(
    <Avatar className={style}>
        <AvatarImage src={source} />
        <AvatarFallback className="bg-transparent">{!name? 'CN': name.slice(0,2).toUpperCase()}</AvatarFallback>
    </Avatar>
    )
}