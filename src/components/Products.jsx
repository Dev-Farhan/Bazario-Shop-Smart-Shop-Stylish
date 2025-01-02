import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Card from "./Card";
import { useData } from "../context/DataContext ";

const Products = ({ productsPerPage, title, subTitle }) => {
  const { products, isLoading } = useData();
  const [currentPage, setCurrentPage] = useState(0);

  // const productsPerPage = 8; // Number of products to show per page

  // Determine the products to show based on current page
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  // Handle navigation
  const handleNext = () => {
    if (endIndex < products.length) {
      setCurrentPage((preVPage) => preVPage + 1);
    }
  };
  const handlePrevious = () => {
    if (startIndex > 0) {
      setCurrentPage((preVPage) => preVPage - 1);
    }
  };

  return (
    <>
      <div className="mt-10">
        <div className="flex items-center gap-3 ">
          <span className="h-[20px] w-[10px] bg-red-500"></span>
          <span className="font-semibold">{title}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl md:text-4xl font-semibold">
            {subTitle ? subTitle : ""}
          </span>
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`bg-gray-200 rounded-full p-3 hover:bg-gray-400 cursor-pointer ${
                currentPage === 0 && "cursor-not-allowed opacity-50"
              }`}
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= products.length}
              className={`bg-gray-200 rounded-full p-3 hover:bg-gray-400 cursor-pointer ${
                endIndex >= products.length && "cursor-not-allowed opacity-50"
              }`}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: productsPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse border border-gray-300 rounded-md p-4 shadow-sm h-[300px] w-full bg-gray-100"
                >
                  {/* Skeleton for Image */}
                  <div className="relative flex items-center justify-center h-[200px] mb-4 overflow-hidden bg-gray-200 rounded"></div>
                  {/* Skeleton for Title */}
                  <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                  {/* Skeleton for Price */}
                  <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                  {/* Skeleton for Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 bg-gray-300 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              ))
            : visibleProducts.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  product={product}
                />
              ))}
        </div>
        {/* View All Products Button
        {!isLoading && products.length > 8 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => router.push("/products")}
              className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition"
            >
              View All Products
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Products;
