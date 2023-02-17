import React, {useState, useRef, useEffect} from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from '../App';


interface SingleProps {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos, }:SingleProps) => {
  
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id:string) => {
    setTodos(
      todos.map((todo)=> 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    ))
  }

  const handleDelete = (id:string) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id:string) =>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id === id ? {...todo, todo:editTodo} : todo
    )))
    setEdit(false)
  }
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect (()=>{
    inputRef.current?.focus();    
  },[edit])

  return (
    <form className=' flex p-5 rounded-md mt-4 transition bg-bgImg hover:shadow-singleTodo hover:scale-[1.01] justify-between' onSubmit={(e)=> handleEdit(e, todo.id)}>
      {edit ?  (
        <input className=' p-1 border-none text-xl flex-initial focus:outline-none' type="text" ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} />
      ): todo.isDone ? (
        <s className=' p-1 border-none text-xl flex-initial'>{todo.todo}</s>
      ):(
        <span className=' p-1 border-none text-xl flex-initial '>{todo.todo}</span>
      )}
      <div className=' flex items-center '>
        <span className=' ml-2 text-xl cursor-pointer' onClick={()=>{
          if(!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }}><AiFillEdit /></span>
        <span className=' ml-2 text-xl cursor-pointer' onClick={()=> handleDelete(todo.id)}><AiFillDelete /> </span>
        <span className=' ml-2 text-xl cursor-pointer' onClick={()=> handleDone(todo.id)}><MdDone /> </span>
      </div>
    </form>
  )
}

export default SingleTodo