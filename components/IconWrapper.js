'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const IconWrapper = ({children, icon, headlabel, pencil}) => {



  return (
    <Dialog>
    <DialogTrigger className={''}>
   {icon} </DialogTrigger>
    <DialogContent>
      <DialogHeader> 
        <DialogTitle>{headlabel}</DialogTitle>
        <DialogDescription>
  
        {children}
      
  
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default IconWrapper