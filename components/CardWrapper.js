
'use client'
import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
  


const CardWrapper = ({children, headerLabel, backButtonLabel, bcakButtonHref, showSocial}) => {
  return (

    <Dialog>
  <DialogTrigger className={cn("bg-blue-600 text-white font-semibold w-full py-3 px-5 rounded-md flex items-center justify-center gap-4")}>
   Add A Task  <PlusIcon className=""/></DialogTrigger>
  <DialogContent>
    <DialogHeader> 
      <DialogTitle>{headerLabel}</DialogTitle>
      <DialogDescription>

      {children}
    

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  
    

   
  )
}

export default CardWrapper