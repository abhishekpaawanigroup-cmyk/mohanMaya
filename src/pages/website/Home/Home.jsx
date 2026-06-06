import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import TrendyCollection from "./TrendyCollection";
import Hero from "./Hero";
import Testimonials from "./Testimonial";
import BestSellers from "./Best-seller";

const Home = () => {
  return (
    <>
    <Hero />
     <FeaturedProduct />
      <TrendyCollection />
      <Testimonials />
      <BestSellers />
    </>
  );
};

export default Home;
