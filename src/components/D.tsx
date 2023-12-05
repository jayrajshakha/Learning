
import { UseFetch } from '../hooks/UseFetch'

const D = () => {

    const data = UseFetch('https://dummyjson.com/products')
    
    console.log(data);
    
  return (
    <div>
       {/* {
        data && data.map((item) => {
           return(
                 <h1 key={item.id}>{item.title}</h1>
           )
       } */}
       {
           data &&  data.products?.map(i => {
           return (
               <h1 key={i.id}> {i.title}</h1>
           )
        })
       }
      
    </div>
  )
}

export default D