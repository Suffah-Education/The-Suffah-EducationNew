import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import FacultiesSection from './components/FacultiesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/main.css';
import AdminDashboard from './components/DashBoards/Admin Dashboard';
import TeacherDashboard from './components/DashBoards/Teacher Dashboard';
import apiService from './services/authService';
import OfferingsPage from './Pages/Offerings';
import LoginPage from './Pages/LoginPage';
import TeacherSelectionPage from './Pages/Teacher SelectionPage';
import HomePage from './Pages/HomePage';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    console.log("✅ TopBanner Rendered");

  useEffect(() => {
    // Fetch JSON file from public folder
    fetch('/data/Book.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading JSON:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  // Home Page Component
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

  return (
    
      <div className="App">
        <TopBanner />
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="Pages/HomePage" element={<HomePage />} />
          
          {/* Offerings Route */}
          <Route path="Pages/offerings" element={<OfferingsPage />} />
            {/* Login Route */}
          <Route path="Pages/LoginPage" element={<LoginPage />} />
          <Route path="Pages/Teacher SelectionPage" element={<TeacherSelectionPage />} />


          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;