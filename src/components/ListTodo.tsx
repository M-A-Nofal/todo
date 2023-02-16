import React, {useEffect} from 'react'
import SingleTodo from './SingleTodo'
import { Todo } from '../App'

interface ListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ListTodo: React.FC<ListProps> = ({todos, setTodos}) => {

  return (
    <div className=' flex flex-col p-4 mt-5 rounded-md w-11/12 bg-sky-500 '>
      {
        todos.map((todo)=> (
          <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}   />
        ))
      }
    </div>
  )
}

export default ListTodo