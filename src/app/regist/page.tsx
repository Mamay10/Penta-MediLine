"use client";
import React from 'react';
import "../styles/regist.css"; 
import Layout from '../components/Layout';
const Registrasi: React.FC = () => {
  return (
    <Layout>
      <div className="right-section">
        <button className="menu-btn">BPJS</button>
        <button className="menu-btn">NON BPJS</button>
      </div> 
    </Layout>
  );
};

export default Registrasi;
