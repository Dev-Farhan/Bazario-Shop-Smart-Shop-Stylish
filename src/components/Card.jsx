import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Card = ({ title, price, image, product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(
      `/product/${product.title.replace(/\s+/g, "-").toLowerCase()}?id=${
        product.id
      }`
    );
  };

  return (
    <div className="relative group border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2">
        <button
          className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
      {/* Image Container */}
      <div className="relative flex items-center justify-center h-[200px] mb-4 overflow-hidden">
        <img
          className="w-full h-[80%] object-contain"
          src={image}
          alt={title}
        />
        {/* Add to Cart Button */}
        <button
          className="absolute w-full bottom-0 translate-y-full group-hover:translate-y-0 bg-black text-white text-xs font-medium py-2 px-4 rounded transition-transform duration-300"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
      <div className="cursor-pointer " onClick={handleCardClick}>
        {/* Title */}
        <div className="text-sm font-medium text-gray-800">{title}</div>
        {/* Price */}
        <div className="text-sm font-bold text-gray-900 mt-1">${price}</div>
        {/* Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400 text-sm">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
