import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';
import './CSS.css'
import { main } from "./mock/mock.main";

export function Section(){
    const navigate = useNavigate();

    return (
    <section >
        <h1>WOMEN’S FASHION</h1>
        <p>Shop our new arrivals from established brands</p>
        <figcaption className='section-one'>
        {main.map((product)=>{
            return <div 
            onClick={()=>navigate(`product/${product.id}`)}>
                <img src={product.img}  alt="" />
                <p>{product.title}</p>
                <p>{product.prace}</p>
            </div>
        })}
        </figcaption>
</section>)
}
 