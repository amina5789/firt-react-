import { Outlet } from "react-router-dom";
import Header from "./Headerr";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
      <>
  <Header/>     
   <main>
          <Outlet />
        </main>
        <Footer/>
      </>
    );
  };