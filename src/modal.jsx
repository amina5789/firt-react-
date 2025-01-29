export function Modal({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Форма отправлена  идет проверка данных");
       
      };
    
    return(
        <div className="modal">
           
                       <form action=""  onSubmit={handleSubmit}>
                       <h1 className="modal-content">  Войдите в свой акаунт  </h1>
                <input type="text"  placeholder="Введите логин "/>
                <input type=" password "  placeholder="Ведите пароль" />
                <button className=" bttn"  type="submit"   >ВОЙТИ</button>
                <button className="bttn"   onClick={onClose} > Закрыть</button>
            </form>
        </div>
    )
}