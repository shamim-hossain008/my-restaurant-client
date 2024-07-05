import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AllUsers from "../pages/Dashboard/Cart/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/Cart/Cart";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/Oder/OrderFood/OrderFood";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
      // normal user routes
      {
        path: "cart",
        element: <Cart />,
      },
      // admin only routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
