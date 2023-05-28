import React from 'react'
import Menu from './Menu'
import MainSection from './MainSection'

const Body = () => {
  return (
    <div className='flex w-full bg-black h-full text-white'>
        <Menu/>
        <MainSection/>
    </div>
  )
}

export default Body