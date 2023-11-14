import React from "react";
import Hero from "../../components/Hero";
import HeroFooter from "../../components/HeroFooter";
import AboutUs from "../AboutUs";
import ExcluServices from "../ExcluServices";
import OurTeam from "../OurTeam";
import OurPortfolio from "../OurPortfolio";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import ScrollTopButton from "../../components/ScrollTopButton";

const Home = () => {
  return (
    <div className="bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#1E283B]">
      <Hero />
      <HeroFooter />
      <AboutUs />
      <ExcluServices />
      <OurTeam />
      <OurPortfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default Home;
