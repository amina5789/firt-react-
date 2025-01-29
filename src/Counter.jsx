import { useState } from "react"
export const Counter = () => {
    const  [count,setCount]=useState(0)
    return <div  style={{display:"flex",gap:'40px',alignItems:'center'}} className="counter">
       <button onClick={()=>setCount((prev)=> {
              if(prev===0){
                return 0
            }
              return prev - 1
       } )} className="counter-btn">-</button>
        <p> {count} </p>
        <button onClick={()=>setCount((prev)=>prev + 1)}className="counter-btn" >+</button>
    </div>
}