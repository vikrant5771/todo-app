import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import Input from '../input/Input'
import { todoProps } from '@/types'
import { FaTrash } from 'react-icons/fa'
import * as actions from '@/actions';

const DeleteTodo = ({todo}:{todo:todoProps}) => {
  return (
      <Form action={actions.deleteTodo}>
          <Input type='hidden' name='inputId' value={todo.id}></Input>
          <Button actionButton type='submmit' bgColor='bg-red-400' text={<FaTrash/>}></Button>
    </Form>
  )
}

export default DeleteTodo