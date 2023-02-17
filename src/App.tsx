import React, {useState, useEffect} from 'react'
import Input from "./components/Input"
import ListTodo from "./components/ListTodo"

export interface Todo {
  id: string;
  todo: string
  isDone: boolean
}

function App() {
  const LOCAL_STORAGE_KEY = "task-list"
  let storge =localStorage.getItem(LOCAL_STORAGE_KEY) as string

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(()=> {return JSON.parse(storge) || []});

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now().toString(), todo, isDone:false}])
      setTodo('')
    }
  }

  return (
    <div className=" w-full min-h-screen flex flex-col items-center  bg-sky-700">
      <h1 className=" text-xl my-4 mx-0 md:text-4xl text-white z-10 text-center md:my-8 md:mx-0 uppercase ">task to do</h1>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
