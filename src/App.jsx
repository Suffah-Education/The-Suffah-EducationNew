import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Offerings Route */}
          <Route path="Pages/offerings" element={<OfferingsPage />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;