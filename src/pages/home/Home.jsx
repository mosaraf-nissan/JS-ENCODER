import React from "react";
import Hero from "../../components/Hero";
import HeroFooter from "../../components/HeroFooter";
import AboutUs from "../AboutUs";
import ExcluServices from "./ExcluServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroFooter />
      <AboutUs />
      <ExcluServices />
    </div>
  );
};

export default Home;
