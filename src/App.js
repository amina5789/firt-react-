
// import { Button } from './Button';
// import Welcome from './Welcome';
import Header, { Main } from './Headerr';  
import Section from './Section';

//1) компаненты  называються с заглавной буквы 
// 2) компаненты это функции возвращающие определенную отрисовку
//  с определенной логикой -опционально
// 3) компаненты должны экспортироваться 
// 4)пишеться через  
// 5) .JSX Расширения в названии файлов дает нам возможность получать подсказки 
// html тегов 

// утилита для создания React app  - npx create-react-app названия




function App() {
  return <div className="App"> 
  {/* <Welcome />
  <Button /> */}
  <Header /> 
  <Main />
<Section />
  </div>
  
}

export default App;
