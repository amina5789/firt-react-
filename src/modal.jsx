 import React, { useState, useEffect } from 'react';

 export const ModalTime =({isOpen})=>{

    const [openTime,setOpenTime]= useState(null);
const [closeTime,setCloseTime]= useState(0);

useEffect(()=>{
    let timer;
    if (isOpen && openTime === null) {
        setOpenTime(Date.now()); 
      }

      if (!isOpen && openTime) {
        const nowTime = (Date.now() - openTime) / 1000;
        setCloseTime((prev) => prev + nowTime); 
        setOpenTime(null); 
      }
       
      if (isOpen && openTime) {
        timer = setInterval(() => {
          setCloseTime((prev) => (Date.now() - openTime) / 1000);
        }, 1000);
      }

        return ()=>clearTimeout(timer);
},[isOpen,openTime]);

return  <p>Время в открытом состоянии :{ closeTime.toFixed(2) } секунд</p>

}

const stylee =(isOpen)=>({
    display: isOpen ? "block" : "none",
pading: "20px",
});





export function Modal({ onClose, isOpen }) {
    const handleSubmit = (e) => {
        const form = e.target; 
        const login = form.elements[0].value.trim(); 
        const password = form.elements[1].value.trim(); 

        if (login === '' || password === '') {
            alert("Заполните все поля");
            return;
        }
        e.preventDefault(); 
        alert("Форма отправлена  идет проверка данных");    
    };
    return(
        <div className="modal"  style={stylee(isOpen)} >
           
                       <form action=""  onSubmit={handleSubmit}>
                       <h1 className="modal-content">  Войдите в свой акаунт  </h1>
                <input type="text"  placeholder="Введите логин "/>
                <input type=" password "  placeholder="Ведите пароль" />
                <button className=" bttn"  type="submit"   >ВОЙТИ</button>
                <button className="bttn"   onClick={onClose} type='button' > Закрыть</button>
            </form>
            <ModalTime isOpen={isOpen} />
        </div>
    )
}







