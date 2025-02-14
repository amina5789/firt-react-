import { useCallback, useEffect, useRef, useState } from "react"
import { Timer } from "../Timer"
import { Video } from "../Video"


    


export const PAGES=()=>{
  

const [click,setclick] =useState(0)
const handleClick = useCallback(() => {
    setclick((prevClick) => prevClick + 1)
  })
const efect = useEffect(()=>{
   console.log('Количество кликов', click)
 },[click])

    return <div>
        <button onClick={handleClick}>click</button>
        <Timer/>
        <Video/>
    </div>

}



