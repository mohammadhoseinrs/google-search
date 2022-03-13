import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../Context/ResultContextProvider'
import Loading from './Loading'

export default function Results() {
  const {results,isloading,getResults,searchTerm}=useResultContext()
  const location=useLocation()


  useEffect(()=>{
    if(searchTerm){
      if(location.pathname==='/videos'){
        getResults(`/search/q=${searchTerm} videos`)
      }else{
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
    
  },[location.pathname,searchTerm])
  if(isloading) return <Loading/>
  


  switch(location.pathname){
    case '/search':
      return(
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.map((item,index)=>(
            <div key={index} className='md:w-2/5 w-full'>
              <a href={item.link}>
                <p className='text-sm'>
                  {item.link.length>30 ? item.link.substring(0,30) : item.link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {item.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return(
          <div className='flex flex-wrap justify-center items-center'>
            {results?.map(({image,link}, index)=>(
              <a className='sm:p-3 p-5' href={link.href} key={index}>
                <img src={image?.src} alt={link.title} loading='lazy' />
                <p className='w-36 break-words text-sm mt-2'>
                  {link.title}
                </p>
              </a>
            ))}
          </div>
        ) 
    case '/news':
      return(
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
          {results?.map(({links,id,source,title})=>(
            <div key={id} className='md:w-2/5 w-full'>
              <a href={links?.[0].href} className='hover:underline'>
                <p className='text-lg  dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
               </a> 
                <div className='flex gap-4'>
                  <a href={source?.href}>
                    {source?.href}
                  </a>
                </div>
              
            </div>
          ))}
        </div>
      )
          
    case '/videos':
            return(
              <div className='flex flex-wrap'>
                {results?.map((video,index)=>(
                  <div key={index} className='p-2 '>
                    <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />
                  </div>
                ))}
              </div>
            )      
  }
 
}
