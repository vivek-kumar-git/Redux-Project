import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 shadow-lg py-3">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Logo"
            className="w-12 h-12 drop-shadow-lg transition-transform group-hover:scale-110"
          />
          <span className="text-white text-2xl font-extrabold tracking-wide drop-shadow-lg hidden sm:block">
            ShopNest
          </span>
        </NavLink>

        {/* Links Section */}
        <div className="flex gap-8 items-center text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-lg scale-105"
                  : "text-white hover:bg-white/20 hover:scale-105"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-emerald-600 shadow-lg scale-105"
                  : "text-white hover:bg-white/20 hover:scale-105"
              }`
            }
          >
            <FaShoppingCart className="text-2xl drop-shadow" />
            <span>Cart</span>
          </NavLink>

          <NavLink
            to="/login"
            className="ml-2 px-6 py-2 rounded-full bg-white text-emerald-500 font-bold shadow-lg hover:bg-emerald-500 hover:text-white transition-all duration-200 border-2 border-white hover:border-emerald-500"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="ml-2 px-6 py-2 rounded-full bg-white text-blue-500 font-bold shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200 border-2 border-white hover:border-blue-500"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;