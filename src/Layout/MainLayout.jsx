import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import NavBar from "../pages/Home/Home/Shared/NavBar/NavBar";

const MainLayout = () => {
  // conditional nav and footer in login page
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <NavBar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
