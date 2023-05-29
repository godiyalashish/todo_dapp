import React from 'react'
import { Icon } from 'react-icons-kit'
import { plus } from "react-icons-kit/icomoon/plus";

const NewTodoList = () => {
  return (
    <div className='flex flex-col w-3/12 gap-x-1'>
    <div className='bg-[#242731] rounded-lg p-3 flex justify-between'>
        <p>Add new Todo List</p>
        <div className="p-2 shadow-lg pt-1 bg-[#3772FF] flex items-center justify-center h-7 w-7 rounded-full text-white">
            <Icon icon={plus} className="font-bold" />
          </div>
    </div>
</div>
  )
}

export default NewTodoList