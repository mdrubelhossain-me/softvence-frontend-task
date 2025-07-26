import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Location from "../../components/Location/Location";
import Reviews from "../../components/Reviews/Reviews";
import Projects from "../../components/Projects/Projects";
import Investors from "../../components/Investors/Investors";
import ChooseUs from "../../components/ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
      <Products />
      <Location/>
      <ChooseUs/>
      <Reviews/>
      <Projects/>
      <Investors/>
    </div>
  );
};

export default Home;
