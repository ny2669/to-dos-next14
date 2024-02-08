"use client"
 
import { z } from "zod"
 
export const formSchema = z.object({
  task: z.string().min(2 , {message: 'needs to be more than 2 letters'}),


})