import { Section } from "../Section";
// import { Section2 } from "../Section2";
import { Image } from "../Image";
import { useMemo, useState } from "react";
import { main } from "../mock/mock.main";
    
export function Home() {
    const [inputvalue, setValue] = useState('');

    const ChangeValue = (event) => {
        setValue(event.target.value)
    };

    // const filteredItems = main.filter((item) => {
    //     return item.title.toLowerCase().includes(inputvalue.toLowerCase());
    // });

    const filteredItems = useMemo(() => {
        return main.filter((item) => {
            return item.title.toLowerCase().includes(inputvalue.toLowerCase());
        });
    }, [inputvalue]);
   
    return (
        <div>
            <div className="find-conteiner">
                <input
                    type="text"
                    className="find-input"
                    placeholder="Введите что-то"
                    value={inputvalue}
                    onChange={ChangeValue}
                />
                <button className="find">Найти</button>
            </div>

            {inputvalue === '' ? (
                <p className="placeholder-message">Введите что-то</p>
            ) : (
                filteredItems.length > 0 ? (
                    <div>
                        <h3>Найдено товаров: {filteredItems.length}</h3>
                        {filteredItems.map((item, index) => (
                            <div key={index} className="product-card">
                                <h4>{item.title}</h4>
                                <img src={item.img} alt={item.title} />
                                <p>{item.price}</p>
                                <button>Купить</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Ничего не найдено</p>
                )
            )}

            <Section />
            {/* <Section2 /> */}
            <Image />
        </div>
    );
}
