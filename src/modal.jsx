export function Modal({ onClose }) {
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