import './CSS.css'

 function Header({ onButtonClick }) {
    return (
      <header className="container">
        <h1 className='logo'>YOUR LOGO</h1>
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>LOOKBOOK</li>
          <li>FEATURES</li>
          <li>PAGES</li>
          <li>BLOG</li>
        </ul>
        <button className="bttn" onClick={onButtonClick}>
        Войти
      </button>
      </header>
    );
  }
  
  export default Header;
  

 export function Main(){
    return  <div className="hero">
    <div className="content">
      <h1>NEW TREND</h1>
      <h2>COLLUSION</h2>
      <p>An exclusive selection of this season's trends.</p>
      <div className="buttons">
        <button className="btn discover">DISCOVER</button>
        <button className="btn shop-now">SHOP NOW</button>
      </div>
    </div>
  </div>
    //  <img className='main-img' src="https://s3-alpha-sig.figma.com/img/7acf/2b3c/08ae1b1db8a3447b4d04646e824f7594?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MWGqa0sEBQEvIZojE2IsAXHYsiekyV~jbO~BzlBbmnEDHRPvK15BhQ8hbUWXf~aKkGZmsdstIeYWZ5Agjdzipg7nOtKQSCkAAMLXpwNGxijuIawDbMKA2Xe1y-lBNOu-41QNG0P0n5YzY2g9GqBhONCjibVBdJj4OBzez4JHRNebjoUwL~5cPepiYiIANnTrc56cOlJ5g-LFw26pCqL2O0bcL5yuM93NGhLxO4e6M9zUVMkDmr10tUkJ6BuBNGGz4BjdF-Ty55WpydNDdx9LRM5C~tDE2WpSEthpHI7qNvn3sgb2urRrhtHBR6i1K3rr63kKWdarmI4gp15LocHf8A__" alt="" />
  }

  