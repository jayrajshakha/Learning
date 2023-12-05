import { useCoN } from "../context/context"



const B = () => {

    const {a} = useCoN()
    


  return (
    <div>
     <h1>{a.age}</h1>
    
    </div>
  )
}

export default B