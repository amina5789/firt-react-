import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { main } from "../mock/mock.main"
import { Counter } from "../Counter";
import { Shop } from "../Routes/Shop";
export function ProuducCard({ addToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    if (id) {
      const product = main.find((item) => item.id === Number(id));
      if (product) setProduct(product);}
  }, [id]);

  return (
    <div>
      <h1>Страница продукта</h1>
      <img src={product.img} alt="" />
      <h2>{product.title}</h2>
      <h3>{product.prace}</h3>
      <button className="shop" onClick={() => addToCart(product)}>Добавить в корзину</button>
      <Counter />
      <button onClick={() => navigate(-1)}>Вернуться в магазин</button>
    </div>
  );
}
