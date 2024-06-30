import { BiFoodMenu } from "react-icons/bi";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <h2 className="text-2xl font-bold uppercase p-4">MY-Restaurant</h2>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/salad">
              <BiFoodMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
