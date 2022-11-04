import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOUtUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOUtUser()
      .then(() => {
       
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbar h-24 mb-10 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex  m-0 p-0 ">
        <ul className="menu menu-horizontal font-semibold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {user?.uid ? (
              <p className="flex items-center">
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <button
                  onClick={handleLogOut}
                  className="px-2 py-1 bg-blue-600 text-white rounded-sm"
                >
                  Log Out
                </button>
              </p>
            ) : (
              <Link to="/login">
                <button className="px-2 py-1 bg-blue-600 text-white rounded-sm">
                  Log In
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className=" btn btn-outline btn-danger rounded-md border-2 border-red-500 text-red-500 font-semibold">
            Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
