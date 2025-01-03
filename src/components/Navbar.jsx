import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoClose, IoSearch } from "react-icons/io5";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartDialog from "./Dialog";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md p-5 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button
          className="text-xl md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </button>
        {/* Brand Name */}
        <Link to="/" className="font-bold text-2xl ">
          Bazario
        </Link>

        {/* Menu Items */}
        <div className="hidden sm:flex items-center gap-8 text-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative ${
                isActive ? "underline underline-offset-8 align-baseline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive ? "underline underline-offset-8 align-baseline" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive ? "underline underline-offset-8 align-baseline" : ""
              }`
            }
          >
            About
          </NavLink>
          {/* <NavLink
            to="/signup"
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive ? "underline underline-offset-8 align-baseline" : ""
              }`
            }
          >
            Sign Up
          </NavLink> */}
        </div>

        {/* Wishlist and Cart Icons */}
        <div className="flex items-center gap-4">
          <FaRegHeart className="cursor-pointer" />
          <span className="relative">
            <IoCartOutline
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white font-thin">
                {cartCount}
              </span>
            )}
          </span>
        </div>

        {/* Full-Screen Menu */}
        <div
          className={`fixed inset-0 bg-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8 text-xl">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            {/* <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link> */}
          </div>

          <CartDialog open={open} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
