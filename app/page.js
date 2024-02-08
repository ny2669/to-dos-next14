 import CardWrapper from "@/components/CardWrapper";
import Header from "@/components/Header";
import ToDoList from "@/components/ToDoList";
import { getData } from "@/app/lib/datafunctions/getData"
import Forms from "@/components/form";




const todosData = getData

export default async function  Home() {

  
  const tasks = await todosData()
  


  return (
   <main className="w-full h-full bg-gradient-to-b from-blue-700">
   
    <div className="max-w-4xl mx-auto mt-4 p-5">
      <div className="text-center my-5 flex flex-col gap-4">
      <Header label={'Todos List App'}/>
      <CardWrapper headerLabel={'Add Tasks'}>
        <Forms/>
      </CardWrapper>


      </div>


       <ToDoList task={tasks}/>
    </div>
 
   
   </main>
  );
}
