import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { CiMobile3 } from "react-icons/ci";
import { useData } from "../context/DataContext ";
const Categories = () => {
  const { categories, isLoading } = useData();
  const [currentPage, setCurrentPage] = useState(0);
  const categoryPerPage = 6;

  const startIndex = currentPage * categoryPerPage;
  const endIndex = startIndex + categoryPerPage;
  const visibleCateegories = categories.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < categories.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevious = () => {
    if (startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className="mt-5">
        <div className="bg-gray-300 w-full h-[2px] mb-10"></div>
        <div className="flex items-center gap-3 ">
          <span className="h-[20px] w-[10px] bg-red-500"></span>
          <span className="font-semibold">Categories</span>
        </div>
        <div className="flex items-center justify-between mt-4 mb-4">
          <span className="text-xl md:text-4xl font-semibold">
            Browse By Category
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
              disabled={endIndex >= categories.length}
              className={`bg-gray-200 rounded-full p-3 hover:bg-gray-400 cursor-pointer ${
                endIndex >= categories.length && "cursor-not-allowed opacity-50"
              }`}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {isLoading
            ? Array.from({ length: categoryPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse flex flex-col items-center gap-4 justify-center rounded-md border border-gray-300 h-[145px] w-[170px] bg-gray-200"
                >
                  <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
              ))
            : visibleCateegories?.map((category) => (
                <div
                  key={category}
                  className="flex flex-col items-center gap-4 justify-center rounded-md border border-gray-300 h-[145px] w-[170px]  text-gray-600 hover:bg-red-500 hover:text-white"
                >
                  <CiMobile3 size={50} />
                  <span className="text-sm capitalize">{category}</span>
                </div>
              ))}
        </div>

        <div className="bg-gray-300 w-full h-[2px] mt-10"></div>
      </div>
    </>
  );
};

export default Categories;
