import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { main } from "../mock/mock.main"


export function ProuducCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Product, setProduct] = useState({});
  console.log(id);

  useEffect(() => {
    if (id) {
      const product = main.find((item) => item.id === Number(id));
      if (product) setProduct(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return(
    <div>
        
        <h1>Страница продукта </h1>
        <img src={Product.img}alt="" />
        <h2>{Product.title}</h2>
        <h3>{Product.prace}</h3>
        <button className="bttn">Корзина</button>
        <button onClick={()=>navigate(-1)} >Вернуться в магазин</button>
    </div>
  )}