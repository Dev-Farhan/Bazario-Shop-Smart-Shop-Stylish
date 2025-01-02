"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

export default function CartDialog({ open, setOpen }) {
  const { cart, removeFromCart } = useCart();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-lg font-semibold text-gray-900">
                    Your Cart
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                      <img
                        src="/assets/empty-cart.png" // Corrected the file path
                        alt="Empty Cart"
                        className="mx-auto mt-4 w-32 h-32 object-contain"
                      />
                      <p className="mt-4">Your cart is empty.</p>
                    </div>
                  ) : (
                    cart.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between py-4 border-b border-gray-200 "
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image} // Ensure each cart item has an image URL
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">
                                {item.title}
                              </span>
                              <span className="text-sm text-gray-500">
                                ${item.price} x {item.quantity}
                              </span>
                            </div>
                          </div>
                          <div>
                            <button
                              className="text-2xl text-red-500 hover:text-red-700"
                              onClick={() => removeFromCart(item.id)} // Ensure removeFromCart is available
                            >
                              <MdDeleteOutline />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                <div className="px-4 sm:px-6 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">
                      Total:
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      $
                      {cart
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
