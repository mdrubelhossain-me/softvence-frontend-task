import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Location from "../../components/Location/Location";
import Reviews from "../../components/Reviews/Reviews";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Products />
      <Location/>
      <Reviews/>
      <Projects/>
    </div>
  );
};

export default Home;
