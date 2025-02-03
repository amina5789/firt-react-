
// import { Button } from './Button';
// import Welcome from './Welcome';
import Header, { Main } from './Headerr';  
import Section from './Section';
import { Section2 } from './Section2';
import {Image} from './Image';
import { Footer } from './Footer';
import { Input } from './Input'
import { useState } from 'react';
import { Modal } from './modal';
// import { Counter } from './Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Shop } from './Routes/Shop';
import { LOOKBOOK } from './Routes/LOOKBOOK';
import { FEATURES } from './Routes/FEATURES';
import { PAGES } from './Routes/PAGES';
import { BLOG } from './Routes/BLOG';
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return <div className="App"> 

<BrowserRouter>
      < Header onButtonClick={handleOpenModal} />
      <hr />
        <Routes>
           <Route path="/" element={< Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/lookbook" element={<LOOKBOOK/>} />
          <Route path="/features" element={< FEATURES/>} />
          <Route path="/PAGES" element={<PAGES />} />
         < Route path="/BLOG" element={ <BLOG/>} />


          <Route path="*" element={<h1>ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>}/> 
        </Routes>
      </BrowserRouter> 


{/* 
  <Header onButtonClick={handleOpenModal} /> */}
      {isModalOpen && <Modal onClose={handleCloseModal} isOpen={isModalOpen}  />}








  {/* <Main /> */}
<Section />
<Section2   imageLink2="https://s3-alpha-sig.figma.com/img/d042/c13a/bf9c8a8523673677fd814b8959a623c0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXloX9iUxnaa9JD8pVhp55NX21yFvM29nyTk~e5K9~lOO4F6zZZkFmTIcL4GWHiZXGVS3fIhir8E~uoDSRDaXjc7wb-wjSS36WRrz3AdRxMsXx6wsLVndyID--jqFJiuZ3c0aa33TEDEs3NEgIiKWaM15sJpBU47NxPfLJVE1mcf2r7nlqo0PV2uQS7LIyPjC2lXrYcI5NdHU~~m9KCsjtLqCGXw5R9bLmI8ygFUN13U5oHEUXLjI-wwQorT3ysZ6~hMQaRiWJtJA~3ncCfOsni16lRtlxaD9DXB34LQzJztGIyq3hXX~jY-pQ0CW61zdaJja8yMMlKkl2uLPJbzRQ__"
      imageLink1="https://s3-alpha-sig.figma.com/img/74ee/41d6/2b57673bb35b8c113a752218ef54b0f4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J93VXfd6sUT3ESFtWaiu-m-33tk4QySljWsEgQLVfg1KpKlwp3qRnLe5vZECVDg4aARt7-ZxihYQ81-~hXe6ARMNlKs9EHQOm3fruVOelEwbg3XUEt2xZDO8wWeABKQ4xbt1cN0hCtyZrdxDVez2TUtYjVmPPaHSeH233-0WLioDn3vwxpvqyM0NbmmlPYWyQjAYyE1PZItfXRSEVCXc6XEFxB8bcST6y1ppaIyxvQuyjIPlr9ZG8AlH3jw4KTxsi9WYWvvtof9DFKeRBkB3Z3e68~rqzjk5wGWQ7oMUT3t6Y2tPHkyi1ivNl2ScQlQzX~sOhiVmB2ifh76MdWdL3w__"
      imageLink3="https://s3-alpha-sig.figma.com/img/497a/739d/32e37a54c374acd444d56466de76cf7c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LGEUwS7eewhHpGPQyIdWPWzAzIA1q7Borm7GuTCYl1Aq59Mo52UR3nkA4wREydZtwZLf48ODZlXrwLb16o9-QTMHjlwujkMt1GQG0HrZG6YRN1hAa-W0G56m5BnG4Ef3AksEc3CMVtv8LmCMgc-GMNCHS8VR~ZWqL69gj~A84M9oX71Vw-MOjShUv7wLwYjPp9HthkuNCI8YwbtZgTA-5w9B1qm0~8H30k81bblzgtpj3ifKpf9IlNNOW05oug5d7~gRCJ6aCdQT999ITvKwbDnoNvKYrpv-MFLfS4R1mvStz8p9FTmq137TXxoeyo~D07LWzGvVKRe-fNOz~~QWbw__"
      imageLink4="https://s3-alpha-sig.figma.com/img/9d03/d6a5/1d93db5b7a238dbefc45146a00f97dc8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpffQN2G7HuR0o26ei3XKQ5lejQU1oqj3gQbZ54wexdLje0RGg8Nrr4sl15SfgLy3qJxI0KvRkn9XcQakBUe7RCcobxRbo08w1-Svi~dYK~7orX6wpgtxhDW8ahuUM~bA6OhvOuIxyfy82Grxa54dtOLa6mETKgdmHGGROruMuaRABESWfmw4GtO1jFrGJiEokA4q1mbPGjmq~8BWkfqMMq4fdv~C7P0A72njA6feCnqwYzmrUQM3R57ei92LTjtNUHJZv7cWT24PgYjx-K~~eBZwaKvulxU8xS1d01RAeAkKhPKzA9ZAabZxkQSXEME7yb3C~kVZFVxVyaiaNPG0A__"/>
   <Image />
<Input />

  <Footer />
  </div>
  
}

export default App;
