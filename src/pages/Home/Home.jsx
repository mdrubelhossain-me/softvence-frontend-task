import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Location from "../../components/Location/Location";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Products />
      <Location/>
      <Reviews/>
    </div>
  );
};

export default Home;
