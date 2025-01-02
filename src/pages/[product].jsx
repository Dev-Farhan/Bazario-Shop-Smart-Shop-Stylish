import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { AiFillProduct } from "react-icons/ai";
import Products from "../components/Products";
const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("M"); // Default selected size
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1

  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const product = await response.json();
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Skeleton Loader for Left Section */}
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-12">
          {/* Skeleton for Large Image */}
          <div className="w-full max-w-xl h-80 bg-gray-300 animate-pulse rounded-md"></div>

          {/* Skeleton for Thumbnails */}
          <div className="flex justify-center md:flex-col gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-28 md:h-28 bg-gray-300 animate-pulse rounded-md"
              ></div>
            ))}
          </div>
        </div>

        {/* Skeleton Loader for Right Section */}
        <div className="flex-1 space-y-6">
          <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-1/4 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-md"></div>

          {/* Skeleton Loader for Static Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>

          {/* Skeleton Loader for Quantity and Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
            <div className="w-24 h-10 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-md"></div>
          </div>

          {/* Skeleton Loader for Delivery Info */}
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-32 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-32 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Prevent quantity from going below 1
    }
  };

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: product.title, icon: AiFillProduct },
  ];

  return (
    <div className="p-6">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left Section: Image Gallery */}
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-12">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm rounded-md"
          />
          <div className="flex justify-center md:flex-col gap-6">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 md:w-28 md:h-28 md:max-w-md rounded-md cursor-pointer border-2 border-gray-100 p-4 md:p-3"
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-xl text-gray-800 font-semibold">
            ${product.price}
          </div>
          <span className="text-sm text-gray-600">
            Category: {product.category}
          </span>
          <p className="text-gray-700">{product.description}</p>

          {/* Static Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Colours:</span>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
              </div>
            </div>

            {(product.category === "men's clothing" ||
              product.category === "women's clothing") && (
              <div className="flex items-center space-x-4">
                <span className="font-medium">Size:</span>
                <div className="flex items-center gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size ? "bg-gray-200" : "bg-transparent"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 border rounded-md"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 py-1 border rounded-md"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md">
              Buy Now
            </button>
            <button className="p-2 border rounded-md">♥</button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Free Delivery</span>
              <span className="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Return Delivery</span>
              <span className="text-sm text-gray-500">
                Free 30 Days Delivery Returns. Details
              </span>
            </div>
          </div>
        </div>
      </div>
      <Products productsPerPage={4} title={"Related Products"} />
    </div>
  );
};

export default ProductDetail;
