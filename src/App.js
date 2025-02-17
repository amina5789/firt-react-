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
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Shop } from './Routes/Shop';
import { LOOKBOOK } from './Routes/LOOKBOOK';
import { FEATURES } from './Routes/FEATURES';
import { PAGES } from './Routes/PAGES';
import { BLOG } from './Routes/BLOG';
import { ProuducCard } from './ProductCard/ProductCard';
import { Profile } from './Routes/Profile';
import { main } from './mock/mock.main';
import { routes } from './routes';

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
    const itemIndex = cart.findIndex(item => item.title === product.title);
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].counter += counter; 
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, counter }]);
    }
  });

  return (
    <div className="App">
      <RouterProvider router={routes} /> 
      {isModalOpen && <Modal onClose={handleCloseModal} isOpen={handleOpenModal} />}
   
    </div>
  );
}

export default App;
