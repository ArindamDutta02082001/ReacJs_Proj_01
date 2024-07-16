import React from "react";
import Header from "../commonPage/Header";
import Footer from "../commonPage/Footer";
import { Outlet } from "react-router-dom";

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
