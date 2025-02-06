export const Shop = ({ cart = [] }) => { 
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
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
