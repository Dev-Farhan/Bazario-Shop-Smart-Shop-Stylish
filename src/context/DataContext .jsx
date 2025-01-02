import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const categoriesResponse = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const productsResponse = await fetch(
          "https://fakestoreapi.com/products"
        );
        setCategories(await categoriesResponse.json());
        setProducts(await productsResponse.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ categories, products, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
