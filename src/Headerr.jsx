import { NavLink, Outlet } from 'react-router-dom';
import { ROUTER_PATHS } from './routesPaths';
import { Footer } from './Footer';



function Header({ onButtonClick }) {
  return (
    <header className="container">
      <h1 className="logo">YOUR LOGO</h1>
      {Object.keys(ROUTER_PATHS).map((key, index) => (
        <NavLink key={index} to={ROUTER_PATHS[key]}>
          {key}
        </NavLink>
      ))}
      <button className="bttn" onClick={onButtonClick}>
        Войти
      </button>
    </header>
  );
}

export default Header;
