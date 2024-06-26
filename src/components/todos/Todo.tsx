import { todoProps } from '@/types'
import React from 'react'
import ChangeTodo from './ChangeTodo'
import EditTodo from './EditTodo'

const Todo = ({todo}:{todo:todoProps}) => {
  return (
      <div className='w-10/12 mx-auto flex items-center justify-center bg-slate-900 py-4 px-20 rounded-2xl'>
          
          {/* Changetodo */}
      <ChangeTodo todo={todo} />
      <span className='text-center font-bold uppercase grow'>{todo.title}</span>
      <div className='flex items-center mx-2'><EditTodo todo={todo} /></div>
      
      <div className='flex items-center'>  {/* delete todo */}</div>

        
    </div>
  )
}

export default Todo