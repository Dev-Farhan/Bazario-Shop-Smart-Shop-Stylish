import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new item to cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Get Cart Count
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Cart
export const useCart = () => useContext(CartContext);
