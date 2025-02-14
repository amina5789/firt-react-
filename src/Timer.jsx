import { useRef, useState } from "react"


export function Timer(){

    const [time,setTime]=useState(30);
    const timerRef=useRef(null)
    
   
    const startTime = () => {
        if (!timerRef.current) {
          timerRef.current = setInterval(() => {
            setTime((prev) => {
              if (prev === 1) {  
                clearInterval(timerRef.current);
                timerRef.current = null;
                alert('Время вышло');
                return 30;  
              }
              return prev - 1;
            });
          }, 1000);
        }
      };
    
    const reselveTimer= ()=>{
        if(time ){
            setTime(30)  
        }
        if(timerRef.current){
            clearInterval(timerRef.current)
            timerRef.current =null
        }
    }
    
        return <div>
    <h2>время:{time} сек</h2>
    <button onClick={startTime}>Старт </button>
    <button onClick={reselveTimer}>Cбросить</button>
    </div>
    }