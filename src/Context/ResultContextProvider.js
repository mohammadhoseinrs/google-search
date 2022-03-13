import React , {createContext, useContext, useState} from "react"


const ResultContext=createContext()
const baseUrl='https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider=({children})=>{
    const [results,setResults]=useState([])
    const [isloading,setIsloading]=useState(false)
    const [searchTerm,setSearchTerm]=useState('elon musk')

    const getResults=async(type)=>{
        setIsloading(true)
        const response=await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '3ec1e98b70mshc5af36a92a38b50p1d6625jsn541231dac3cc'
              }
        })
        const data=await response.json()
        if(type.includes('/news')){
            setResults(data.entries) 
        }else if(type.includes('/images')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }
        
        setIsloading(false)
    }

    return (
        <ResultContext.Provider value={{
            getResults,results,searchTerm,setSearchTerm,isloading
        }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext=()=>useContext(ResultContext)