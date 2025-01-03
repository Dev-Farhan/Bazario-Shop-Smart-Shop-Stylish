import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "/assets/not-found.svg"; // Replace with your image path

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src={NotFoundImage}
        alt="Page Not Found"
        className="w-1/2 md:w-1/3 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
