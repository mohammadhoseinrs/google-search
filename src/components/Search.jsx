import React, { useEffect, useState } from 'react'
import Links from './Links'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../Context/ResultContextProvider'


export default function Search() {
  const [text,setText]=useState('elon musk')
  const {setSearchTerm}=useResultContext()
  const [debouncedValue]=useDebounce(text,600)

  useEffect(()=>{
    if(debouncedValue){
      setSearchTerm(debouncedValue)
    }
  },[debouncedValue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input type="text" value={text} 
      className='sm:w-96 w-80 h-10 dark:bg-gray-200 rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
      placeholder='search...'
      onChange={(event)=>setText(event.target.value)}
       />
       {text && (
         <button className='absolute top-1.5 right-4 text-2xl text-gray-500'
         onClick={()=>setText('')}
         >
           x
         </button>
       )}
    <Links />
    </div>
  )
}
