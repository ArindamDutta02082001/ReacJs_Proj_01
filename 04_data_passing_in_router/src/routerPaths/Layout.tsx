
import { Outlet } from "react-router-dom";
import Header from "../CommonPage/Header";
import Footer from "../CommonPage/Footer";

/*
 * the layout is created to provide the commons like <Header/> , <Footer/> etc  ,
 * and the <outlet/> part will be replaced by the <Element/> in particular path
 */

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
