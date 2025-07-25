import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Location from "../../components/Location/Location";

const Home = () => {
  return (
    <div>
      <Products />
      <Location/>
    </div>
  );
};

export default Home;
