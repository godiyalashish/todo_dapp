import React from 'react'
import TodoLists from './TodoLists'
import EditTodo from './EditTodo'
import store from '../utilities/store'
import { useSelector } from 'react-redux'
import NewTodoList from './NewTodoList'

const MainSection = () => {
  const todolists = useSelector(store=>store.todolists.lists);

  if(Object.keys(todolists).length === 0) return "loading";
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='border-b-4 border-[#242731] flex justify-between p-2 pr-6 pl-6'>
            <div>Section</div>
            <div>Icons</div>
        </div>
        <div className='flex w-full h-full'>
            <div className='flex w-10/12 gap-x-2 p-6 pt-9 justify-evenly'>
                {
                    Object.keys(todolists).map(list=>(
                        <TodoLists name={todolists[list].name} items={todolists[list].items}/>
                    ))
                }
                <NewTodoList/>
            </div>
            <div className='border-[#242731] border-l-2 h-full'>
                <EditTodo/>
        </div>
        </div>
        
    </div>
  )
}

export default MainSection