
// import { Button } from './Button';
// import Welcome from './Welcome';
import Header, { Main } from './Headerr';  
import {Section} from './Section';
import { Section2 } from './Section2';
import {Image} from './Image';
import { Footer } from './Footer';
import { Input } from './Input'
import { use, useCallback, useState } from 'react';
import { Modal } from './modal';
// import { Counter } from './Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Shop } from './Routes/Shop';
import { LOOKBOOK } from './Routes/LOOKBOOK';
import { FEATURES } from './Routes/FEATURES';
import { PAGES } from './Routes/PAGES';
import { BLOG } from './Routes/BLOG';
import { ProuducCard } from './ProductCard/ProductCard';
import { Profile } from './Routes/Profile';
import { main } from './mock/mock.main';

//1) компаненты  называються с заглавной буквы 
// 2) компаненты это функции возвращающие определенную отрисовку
//  с определенной логикой -опционально
// 3) компаненты должны экспортироваться 
// 4)пишеться через  
// 5) .JSX Расширения в названии файлов дает нам возможность получать подсказки 
// html тегов 

// утилита для создания React app  - npx create-react-app названия




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [cart, setCart] = useState([]);
  const addToCart = useCallback((product, counter) => {
      const ItemIndex = cart.findIndex(item => item.title === product.title);
      if (ItemIndex > -1) {
          const updatedCart = [...cart];
          updatedCart[ItemIndex].counter += counter; 
          setCart(updatedCart);
      } else {
          setCart([...cart, { ...product, counter }]); 
      }
  });

  return (
      <div className="App">
          <BrowserRouter>
              <Header onButtonClick={handleOpenModal} />
              <hr />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop cart={cart} />} />
                  <Route path="/product/:id" element={<ProuducCard addToCart={addToCart} />} />
                  <Route path="/PAGES" element={<PAGES/>} />

                  <Route path="*" element={<h1>ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>} />
              </Routes>
          </BrowserRouter>
          
          {isModalOpen && <Modal onClose={handleCloseModal} isOpen={isModalOpen} />}
          <Footer />
      </div>
  );
}

export default App;