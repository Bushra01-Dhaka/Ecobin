import React from "react";
import { Outlet } from "react-router";
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
    </div>
  );
};

export default MainLayout;
