import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import AllUsers from "../pages/Dashboard/Cart/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/Cart/Cart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/Oder/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      // admin routes
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
