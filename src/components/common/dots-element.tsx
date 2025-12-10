import { cn } from "@/lib/utils"

export function DotsVisualElement({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("absolute flex flex-col items-center justify-center top-0 right-56 space-y-6 scale-75", className)} {...props} >
      <div className="w-[61px] h-[61px] rounded-full bg-[#1f1f1f]" />
      <div className="w-[45px] h-[45px] rounded-full bg-[#2d2d2d]" />
      <div className="w-[27px] h-[27px] rounded-full border border-[#2f2f2f]" />
      <div className="w-4 h-4 rounded-full bg-[#353535]" />
    </div>
  )
}