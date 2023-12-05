import { useEffect, useState } from "react"


export const UseFetch = (url) => {

    const [data, setData] = useState([])

    const res = async() => {
        //  const datas = await fetch(url)
        //  const ress = await datas.json()
        //  return ress
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
        .catch()
    }

     useEffect( () => {
         
    //    res().then(ress => setData(ress)).catch()
    res()
        
     },[url])

     return (
        data 
     )
     
     
}