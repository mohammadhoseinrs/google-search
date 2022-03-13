import React, { useState } from 'react'
import {  useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RoutesPage from './components/RoutesPage'

export default function App() {
  const [darkTheme,setDarkTheme]=useState(false)
  
  return (
    <div
    className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <RoutesPage />
        <Footer />
      </div>
    </div>
  )
}
