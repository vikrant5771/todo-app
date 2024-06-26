import AddTodo from "@/components/todos/AddTodo";
import Image from "next/image";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";


async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted:true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex flex-col justify-center items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">BY VIKRANT</h1>
      
      <div className="flex justify-center flex-col items-center">
        {/* addtodo items */}
         <AddTodo/>

        {/* map todo */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen ">
          {data.map((todo,id) => (
            <div className="w-full" key={id} >< Todo todo={ todo}/></div>
          ))}
        </div>
      </div>
   </div>
  );
}
