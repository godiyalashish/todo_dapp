import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

const TodoLists = () => {
  return (
    <div className='flex flex-col w-3/12 gap-x-1'>
        <div className='bg-[#242731] rounded-lg p-3'>
            <p>List : List Name</p>
        </div>
        <AddTodo/>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  )
}

export default TodoLists