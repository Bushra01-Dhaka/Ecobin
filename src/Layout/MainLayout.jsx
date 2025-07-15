import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "../Reused/Navbar";
import Headline from "../Components/HomePage/Headline";
import Footer from "../Reused/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div>
      {
        noHeaderFooter ||  <Headline></Headline>
      }
      {
        noHeaderFooter ||  <Navbar></Navbar>
      }
      {/* <Headline></Headline> */}
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>

      {
        noHeaderFooter ||   <Footer></Footer>
      }
      {/* <Footer></Footer> */}
       <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
