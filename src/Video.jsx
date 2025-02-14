import { useEffect, useRef, useState } from "react"
import VideoPlayer from './video.mp4';

export function Video() {

  const [btn1,setbtn] =useState()
 const videoRef = useRef(null)



 const startTime = () => {
  if (!videoRef.current) {
    videoRef.current = setInterval(() => {
      setbtn((prev) => {
        if (prev === 1) {  
          clearInterval(videoRef.current);
          videoRef.current = null;
        }
        return prev + 1;
      });
    }, 1000);
  }
};


const effect= useEffect(()=>{
  
},[])


    return <div>
        <br />
        <br />
        <video controls muted onChange={setbtn}>
        
          <source src={VideoPlayer}/>
        </video>
        <br />
<button onClick={startTime}>Воспроизвести</button>
        <button>Пауза</button>
      </div>
    
  }
  