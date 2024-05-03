import { cn } from "@/lib/utils";
import Image from "next/image";

type ImageProps = {
    source:string,
    alt:string,
    size?:string,
    fit?:string
}
export function ImageTemplate({source,alt,size, fit}:ImageProps){
    const style = cn('relative', size,  {
        ' h-8 w-8': !size || size === undefined,
    })
    return(
    <div className={style}>
        <Image
            fill 
            src={source}
            alt={alt}
            className={cn("absolute w-full h-full ",fit,{
                'object-cover' : !fit,

            })}
        />
    </div>
    )
}