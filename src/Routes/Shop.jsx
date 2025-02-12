export const Shop = ({ cart = [], cartItems = [] }) => { 
    if (cart.length === 0) {
        return <h1>Ваша корзина пуста</h1>;
    }

    return (
        <div>
            <h1>Корзина</h1>
            <div>
                {
                    cart.map((product, index) => (
                        <div key={index}>
                            <img src={product.img} alt="" />
                            <h2>{product.title}</h2>
                            <h3>{product.prace}</h3> 
                            <p>Количество: {product.counter}</p> 
                        </div>
                    ))
                }
                {cartItems.length > 0 && cartItems.map((item, index) => (
                    <li key={index}>
                        {item.title} - {item.counter} шт. - {item.price * item.counter}$
                    </li>
                ))}
            </div>
        </div>
    );
};
