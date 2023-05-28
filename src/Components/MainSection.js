import React from 'react'
import TodoLists from './TodoLists'
import EditTodo from './EditTodo'

const MainSection = () => {
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='border-b-4 border-[#242731] flex justify-between p-2 pr-6 pl-6'>
            <div>Section</div>
            <div>Icons</div>
        </div>
        <div className='flex w-full'>
            <div className='flex w-10/12 gap-x-2 p-2'>
                <TodoLists/>
                <TodoLists/>
                <TodoLists/>
                <TodoLists/>
            </div>
            <div className='border-[#242731] border-l-2'>
                <EditTodo/>
            </div>
        </div>
    </div>
  )
}

export default MainSection