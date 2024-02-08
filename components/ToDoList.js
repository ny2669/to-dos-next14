'use client'

import {
    Table,
    TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { useState } from "react"

import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';  
import CardWrapper from "./CardWrapper";
import IconWrapper from "./IconWrapper";
import EditForm from "./EditForm";
import { Button } from "./ui/button";
import { deleteToDos } from "@/app/lib/datafunctions/getData";
import { useRouter } from "next/navigation";



const ToDoList = ({task}) => {

const router = useRouter()

const handleDeleteTask = async (id) => {


  try {

    await deleteToDos(id)


    router.refresh()
    
  } catch (error) {

    console.log(error)
    
  }





}



  return (
    <Table className='w-full'>
    
    <TableHeader>
      <TableRow>
        <TableHead className={cn("text-white w-full")}>Tasks</TableHead>
   
        <TableHead className={cn(" text-white text-right w-full")}>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>

   

{task && task?.map((item, i) => {


return(

  <TableRow key={i} className='w-full'>


<TableCell className=" font-medium text-white ">{typeof item?.text === "object" ? item.text.task : item.text}</TableCell>



<TableCell className="font-medium text-white ">
  <div className=" flex gap-4 ">

 <IconWrapper headlabel='Edit Task' icon={<Pencil className="cursor-pointer text-blue-500 drop-shadow-md" />}>

<EditForm  task={item}/>

 </IconWrapper>


<IconWrapper headlabel={'Are you sure, you want to Delete Task'} icon={ <Trash2 className="cursor-pointer text-red-500 drop-shadow-md"/>}>

  <Button onClick={() => handleDeleteTask(item.id)}>Yes</Button>

</IconWrapper>
 
  </div>

  </TableCell>

</TableRow>
)




})} 

     
    </TableBody>
  </Table>
  
  )
}

export default ToDoList