import { useReducer } from "react"

const xxx = (state, action) => {
      if(action.type === 'ADD'){
         return state = 'Jay'
      }
      if(action.type === 'dev'){
         return state = 'dev'
      }
}

const C = () => {

    const val = 'veer';

    const [a , setA] = useReducer(xxx ,val)
    

  return (
    <div>
        <h1>{a}</h1>
       <button onClick ={() => setA({type : 'ADD'})} >okkkk</button>
       <button onClick ={() => setA({type : 'dev'})} >okkkk</button>
    </div>
  )
}

export default C
