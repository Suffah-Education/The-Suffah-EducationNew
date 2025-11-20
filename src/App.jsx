import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.css";

import "./i18n";  // ✅ ONLY THIS — Perfect!

import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import FacultiesSection from "./components/FacultiesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import AllTeachers from "./components/AllTeachers";
import OfferingsPage from "./Pages/Offerings";
import ContactForm from "./components/ContactForm";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/Book.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <TopBanner />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection data={data?.hero} />
              <StatsSection data={data?.stats} />
              <FeaturesSection data={data?.features} />
              <FacultiesSection data={data?.faculties} />
              <AboutSection data={data?.about} />
              <ContactSection data={data?.contact} />
              <Footer />
            </>
          }
        />

        <Route path="/Pages/offerings" element={<OfferingsPage />} />
        <Route path="/all-teachers" element={<AllTeachers />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
