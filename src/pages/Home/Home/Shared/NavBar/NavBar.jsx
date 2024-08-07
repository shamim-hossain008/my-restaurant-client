import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAdmin from "../../../../../hooks/useAdmin";
import useCart from "../../../../../hooks/useCart";
import { AuthContext } from "../../../../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )} 
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userAdmin">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/orderFood/salad">Oder Food</Link>
      </li>

      <li>
        <Link to="/dashboard/cart">
          <button>
            <div className="badge badge-secondary">+{cart.length}</div>
            <FaShoppingCart />
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
        <>
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar  fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-600 text-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            My-Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
