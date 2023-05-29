import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'


const TodoLists = ({name, items}) => {
  return (
    <div className='flex flex-col w-3/12 gap-x-1'>
        <div className='bg-[#242731] rounded-lg p-3'>
            <p>List : {name}</p>
        </div>
        <AddTodo/>
        {items.map(todo=>(
          <TodoItem name={todo.name}/>
        ))}
    </div>
  )
}

export default TodoLists