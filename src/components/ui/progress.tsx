"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface CustomProps{
  bgColor?: string,
  indicatorColor?:string,
  roundedIndicator?: boolean
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProps &
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, bgColor, indicatorColor, roundedIndicator, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full ",
      className, bgColor,
      {
        'bg-secondary': !bgColor
      }
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all",indicatorColor,{
        'bg-primary': !indicatorColor,
        'rounded-full': roundedIndicator
      })}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
