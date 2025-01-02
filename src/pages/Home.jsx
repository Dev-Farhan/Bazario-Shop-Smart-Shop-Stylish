import React from "react";
import { CarouselDefault } from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <>
      <div className="p-5">
        <CarouselDefault />
        <Categories />
        <Banner />
        <Products
          productsPerPage={8}
          title={"Our Products"}
          subTitle={"Explore Our Products"}
        />
        <NewArrival />
        <Service />
      </div>
    </>
  );
};

export default HomePage;
