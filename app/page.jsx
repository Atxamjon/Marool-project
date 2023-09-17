import React from "react";
import Hero from "./components/Hero";
import Aside from "./components/aside";
import CatalogCarusel from "./products/Catalog/Catalog";

const Home = () => {
  return (
    <div>
      <Hero />
      <CatalogCarusel/>
      <Aside/>
    </div>
  );
};
export default Home;
