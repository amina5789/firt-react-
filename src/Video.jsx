import { useRef, useState } from "react";
import VideoPlayer from './video.mp4';

export function Video() {
  const [btn1, setBtn] = useState("Воспроизвести"); // Состояние для текста на кнопке
  const videoRef = useRef(null); // Создаем ссылку на видео

  const startTime = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();  // Воспроизведение видео
      setBtn("Пауза"); // Меняем текст на кнопке
    } else {
      videoRef.current.pause(); // Пауза
      setBtn("Воспроизвести"); // Меняем текст на кнопке
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
      <button onClick={startTime}>{btn1}</button> {/* Меняем текст на кнопке */}
    </div>
  );
}
