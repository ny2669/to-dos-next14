'use client'

import { formSchema } from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { getdotos } from "@/app/lib/datafunctions/getData";
import { useRouter } from "next/navigation";


const Todos = getdotos 








const Forms = () => {

  const router = useRouter()



  

const onSubmit = async (values) => {

  const num = Math.floor(Math.random() * 100); 

try {

  await Todos({
id: num.toString(),
text: values
  })
  router.refresh()

} catch (error) {

  console.log(error)
  
}
 
}


    const taskform = useForm({

        resolver: zodResolver(formSchema),
        defaultValues: {
    
            task: ''
        }
    })


    return (


        <Form {...taskform}>
        <form onSubmit={taskform.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={taskform.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input type='text' placeholder="Add a task..." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )


}


export default Forms




