"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './dashboard/page';
import Registrasi from './regist/page'; // Impor halaman registrasi
import Setting from './setting/page';

const HomePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Route untuk halaman dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Route untuk halaman registrasi */}
        <Route path="/regist" element={<Registrasi />} /> {/* Rute baru */}

        {/* Route untuk halaman setting */}
        <Route path="/setting" element={<Setting />} /> {/* Rute baru */}
      
      </Routes>
    </Router>
  );
};

export default HomePage;
