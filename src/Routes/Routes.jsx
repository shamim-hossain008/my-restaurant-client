import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import Cart from "../pages/Dashboard/Cart/Cart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/Oder/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/orderFood/:category",
        element: <OrderFood />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
