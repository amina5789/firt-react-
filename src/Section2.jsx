import './CSS.css'
import { Counter } from './Counter';
export function Section2({imageLink1,imageLink2,imageLink3,imageLink4}) {
    return (
        <section className='a'>
            <h1>MEN’S FASHION</h1>
            <p>Shop our new arrivals from established brands</p>

            <figcaption>
            <img src={imageLink1} alt="" />
            <p>IGURE</p>
            <figure>GREEN MUSCLE FIT POLO SHIRT</figure>
            <p>$229.00        $129.00</p>
            <Counter />

        </figcaption>


        <figcaption>
            <img src={imageLink2} alt="" />
            <p>IGURE</p>
            <figure>GREEN MUSCLE FIT POLO SHIRT</figure>
            <p>$229.00        $129.00</p>
            <Counter />

        </figcaption>

          
        <figcaption>
            <img src={imageLink3} alt="" />
            <p>IGURE</p>
            <figure>GREEN MUSCLE FIT POLO SHIRT</figure>
            <p>$229.00        $129.00</p>
            <Counter />
        </figcaption>


        
        <figcaption>
            <img src={imageLink4} alt="" />
            <p>IGURE</p>
            <figure>GREEN MUSCLE FIT POLO SHIRT</figure>
            <p>$229.00        $129.00</p>
            <Counter />
        </figcaption>
        </section>
    );
}
