import React from "react";
import navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/StatsSection";
import Faculties from "../components/FacultiesSection";
import Features from "../components/FeaturesSection";
import About from "../components/AboutSection";
import Contact from "../components/ContactSection";


const HomePage = () => (
    <>
      <HeroSection data={data.hero} />
      <StatsSection data={data.stats} />
      <FeaturesSection data={data.features} />
      <FacultiesSection data={data.faculties} />
      <AboutSection data={data.about} />
      <ContactSection data={data.contact} />
    </>
  );


export default HomePage;
