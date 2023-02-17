import React, {useRef} from 'react'

interface InputProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e:React.FormEvent)=> void
}

const Input: React.FC<InputProps> = ({todo, setTodo, handleAdd}) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e:React.FormEvent) => {
    handleAdd(e);
    inputRef.current?.blur()
  }

  return (
    <form className='flex w-11/12 relative items-center' onSubmit={handleSubmit}>
      <input className=' w-full rounded-full py-5 px-8 text-2xl border-none transition shadow-input focus:outline-none focus:shadow-inputFocus ' type="input" placeholder='Enter a task' ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button className=' absolute w-12 h-12 m-3 rounded-[50px] right-0 border-none text-xl text-white transition-all shadow-inputSubmit bg-sky-700 hover:bg-sky-500'>Add</button>
    </form>
  )
}

export default Input