import React from "react";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-5 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-6">
        {/* Subscribe Section */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Exclusive</h2>
          <p className="text-sm">Subscribe to our newsletter</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="relative flex items-center border border-white rounded-sm w-full ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black outline-none text-sm px-2 py-2 flex-grow"
            />
            <button className="absolute right-0 text-white hover:text-gray-400 px-4 py-2 bg-transparent">
              <IoMdSend />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Support</h2>
          <p className="text-sm">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh
          </p>
          <p className="text-sm">bazario@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Accounts Section */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Accounts</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li className="hover:text-gray-400 cursor-pointer">My Account</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Orders Tracking
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Checkout</li>
            <li className="hover:text-gray-400 cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-400 cursor-pointer">FAQs</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        {/* Footer Text */}
        <p className="text-sm text-center">
          © 2025 Bazario. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
