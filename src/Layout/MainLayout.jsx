import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Reused/Navbar";
import Headline from "../Components/HomePage/Headline";

const MainLayout = () => {
  return (
    <div>
      <Headline></Headline>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
