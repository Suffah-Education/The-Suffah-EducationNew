import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

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

import OfferingsPage from "./Pages/Offerings";
// import TeacherSelectionPage from "./Pages/Teacher SelectionPage";
// import LoginPage from "./Pages/LoginPage";
// import SignupPage from "./Pages/SignupPage";

// import AdminDashboard from "./components/DashBoards/Admin Dashboard";
// import TeacherDashboard from "./components/DashBoards/TeacherDashboard";
// import StudentDashboard from "./components/DashBoards/StudentDashboard";

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
          {/* 🏠 Home Page (All sections shown together) */}
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

          {/* 🧾 Other Pages */}
          <Route path="/Pages/offerings" element={<OfferingsPage />} />
          {/* <Route path="/teacher-selection" element={<TeacherSelectionPage />} /> */}
          {/* <Route path="/Pages/LoginPage" element={<LoginPage />} /> */}
          {/* <Route path="/pages/SignupPage" element={<SignupPage />} /> */}

          {/* 🎓 Dashboards */}
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          {/* <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} /> */}
        </Routes>
      </>

  );
}

export default App;
