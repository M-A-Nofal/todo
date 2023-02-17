import React from 'react'
import SingleTodo from './SingleTodo'
import { Todo } from '../App'
import { DragDropContext, DropResult, Draggable, Droppable } from 'react-beautiful-dnd';

interface ListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ListTodo: React.FC<ListProps> = ({todos, setTodos}) => {

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result
    if (!destination) return;
    const items = Array.from(todos)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)
    setTodos(items)
  }

  return (
    <div className=' flex flex-col p-4 mt-5 rounded-md w-11/12 bg-sky-500 '>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todo'>
          {(provided)=>(
            <div className='todo' {...provided.droppableProps} ref={provided.innerRef} >
              {todos.map((todo, index)=> {
                return (
                  <Draggable key={todo.id} draggableId={todo.id} index={index} >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}   />                        
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default ListTodo