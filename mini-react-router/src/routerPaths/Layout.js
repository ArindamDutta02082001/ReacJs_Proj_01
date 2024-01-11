import React from "react";
import Header from "../commonComponent/Header";
import Footer from "../commonComponent/Footer";
import { Outlet } from "react-router-dom";

/*
 * the layout is created to provide a prototype ,
 * this outlet will put the component inside
 * and the <outlet/> part will be replaced by home , about , contact materials as per required
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
