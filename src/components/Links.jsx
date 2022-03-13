import React from 'react'
import { NavLink } from 'react-router-dom'

const link=[
    {url:'/search' , text:'All'},
    {url:'/images' , text:'Images'},
    {url:'/news' , text:'News'},
    {url:'/videos' , text:'Videos'},
]
export default function Links() {
  return (
    <div className='flex sm:justify-around  justify-center items-center mt-4'>
        {link.map(({url,text},index)=>(
            <div key={index} className='text-blue-700  dark:text-blue-300 pb-3 mx-8 border-b-2 border-transparent hover:border-blue-700 hover:border-b-2 hover:text-red-700'>
                <NavLink  to={url} className={(link)=>link.isActive ? ' text-red-700' :''}  >
                {text}
            </NavLink>
            </div>
            
        ))}
    </div>
  )
}
