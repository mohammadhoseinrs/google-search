import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Results from './Results'

export default function RoutesPage() {
  const Navigate=useNavigate()
  return (
    <div className='p-5'>
      <Routes>
        <Route path='/' >
          
        </Route>
       {['/search','/images','/news','/videos'].map((item , index)=>(
          <Route key={index} path={item} element={<Results />}/>
       ))}  
      </Routes>
    </div>
  )
}
