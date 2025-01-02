import React from "react";
import { Link } from "react-router-dom"; // Use `next/link` if you're using Next.js
import { FaHome } from "react-icons/fa"; // Example for Home icon

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-600 my-4">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {/* Conditional Icon for the first breadcrumb */}
          {index === 0 && <FaHome className="mr-2 text-gray-500" />}
          {item.link ? (
            <Link
              to={item.link}
              className="hover:text-blue-500 flex items-center"
            >
              {item.icon && <item.icon className="mr-2" />} {/* Dynamic icon */}
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center text-gray-500">
              {item.icon && <item.icon className="mr-2" />} {/* Dynamic icon */}
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
