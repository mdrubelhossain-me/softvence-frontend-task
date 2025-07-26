import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Location from "../../components/Location/Location";
import Reviews from "../../components/Reviews/Reviews";
import Projects from "../../components/Projects/Projects";
import Investors from "../../components/Investors/Investors";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Resources from "../../components/Resources/Resources";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products />
      <Location/>
      <ChooseUs/>
      <Reviews/>
      <Projects/>
      <Investors/>
      <Resources/>
      <Footer/>
    </div>
  );
};

export default Home;
