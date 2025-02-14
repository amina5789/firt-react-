import { useRef, useState } from "react";
import VideoPlayer from './video.mp4';

export function Video() {
  const [btn1, setBtn] = useState("Воспроизвести"); 
  const videoRef = useRef(null); 

  const startTime = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();  
      setBtn("Пауза"); 
    } else {
      videoRef.current.pause(); 
      setBtn("Воспроизвести"); 
    }
  };

  return (
    <div>
      <br />
      <br />
      <video ref={videoRef} controls muted>
        <source src={VideoPlayer} />
      </video>
      <br />
      <button onClick={startTime}>{btn1}</button> 
    </div>
  );
}
