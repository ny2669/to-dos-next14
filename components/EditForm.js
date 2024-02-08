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

import { editToDos } from "@/app/lib/datafunctions/getData";
import { useRouter } from "next/navigation";











const EditForm = ({task}) => {

  const router = useRouter()

  console.log(task?.id)

  

const handleEditonSubmit = async (values) => {




try {

  await editToDos({
id: task?.id,
text: values ,
  })
  router.refresh()

} catch (error) {

  console.log(error)
  
}
 
}

const defaultTaskValue = task?.text ? (typeof task.text === 'string' ? task.text : task.text.task) : '';


    const taskform = useForm({

        resolver: zodResolver(formSchema),
        defaultValues: {
    
          task: defaultTaskValue,
        }
    })


    return (


        <Form {...taskform}>
        <form onSubmit={taskform.handleSubmit(handleEditonSubmit)} className="space-y-8">
          <FormField
            control={taskform.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input type='text' placeholder="Edit a task..." {...field} />
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


export default EditForm




