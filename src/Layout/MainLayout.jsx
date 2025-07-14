import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Reused/Navbar";
import Headline from "../Components/HomePage/Headline";
import Footer from "../Reused/Footer";

const MainLayout = () => {
  return (
    <div>
      <Headline></Headline>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
       <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
