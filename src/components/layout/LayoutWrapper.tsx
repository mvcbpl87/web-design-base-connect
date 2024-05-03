import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode,
    className?: string
}

export function LayoutWrapper({ children, className}:Props){
    const style = cn(className, 'min-h-screen font-custom')
    return(<div className={style}>{children}</div>)
}