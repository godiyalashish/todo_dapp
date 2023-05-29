import React from 'react'
import { Icon } from 'react-icons-kit'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import {bin} from 'react-icons-kit/icomoon/bin'
import {androidBookmark} from 'react-icons-kit/ionicons/androidBookmark'

const TodoItem = ({name}) => {
    console.log(name)
  return (
    <div className='bg-[#14161A] p-2 w-full flex mt-2 rounded-lg min-h-min pb-7 shadow-lg'>
        <div className='w- w-11/12 flex flex-col'>
            <div className='text-[#808191] font-bold text-lg mb-1 flex gap-x-2'>
                <div className='p-2 shadow-lg pt-1 bg-[#3772FF] flex items-center justify-center h-7 w-7 rounded-full text-white'>
                    <Icon icon={androidBookmark} className='font-bold'/>
                </div>
                <p>{name}</p>
            </div>
            <div className='text-[#808191]'>Todo description</div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='p-2 shadow-lg pt-1 bg-[#242731] flex items-center justify-center h-7 w-7 rounded-full'>
                <Icon icon={pencil}/>
            </div>
            <div className='mt-2 p-2 shadow-lg pt-1 bg-[#242731] flex items-center justify-center h-7 w-7 rounded-full'>
                <Icon icon={bin}/>
            </div>
        </div>
    </div>
  )
}

export default TodoItem