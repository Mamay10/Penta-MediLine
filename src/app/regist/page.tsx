"use client";
import React, { useState } from 'react';
import "../styles/regist.css"; 
import Layout from '../components/Layout';

const Registrasi: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null); // State untuk melacak form mana yang aktif (BPJS atau NON BPJS)

  const handleBPJSClick = () => {
    setActiveForm("BPJS");
  };

  const handleNonBPJSClick = () => {
    setActiveForm("NON BPJS");
  };

  const handleCloseModal = () => {
    setActiveForm(null); // Tutup form
  };

  return (
    <Layout>
      <div className="right-section">
        <button className="menu-btn" onClick={handleBPJSClick}>BPJS</button>
        <button className="menu-btn" onClick={handleNonBPJSClick}>NON BPJS</button>
      </div>

      {/* Kondisional: Tampilkan form registrasi BPJS atau NON BPJS */}
      {activeForm && (
        <div className="registration-container">
          <div className="modal">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h2>Registrasi {activeForm}</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
              {activeForm === "BPJS" && (
                <>
                  <div className="form-group">
                    <label htmlFor="cardNumber">No. Kartu</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="Masukkan No Kartu"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctor">Dokter*</label>
                    <select id="doctor" required>
                      <option value="">Masukkan Nama Dokter</option>
                      <option value="dr. John">dr. John</option>
                      <option value="dr. Jane">dr. Jane</option>
                    </select>
                  </div>
                </>
              )}

              {activeForm === "NON BPJS" && (
                <>
                   <div className="form-group">
                    <label htmlFor="cardNumber">NIK</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="Masukkan NIK"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctor">Dokter*</label>
                    <select id="doctor" required>
                      <option value="">Masukkan Nama Dokter</option>
                      <option value="dr. John">dr. John</option>
                      <option value="dr. Jane">dr. Jane</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="clinic">Klinik*</label>
                <select id="clinic" required>
                  <option value="">Masukkan Klinik</option>
                  <option value="Klinik A">Klinik A</option>
                  <option value="Klinik B">Klinik B</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Registrasi;
