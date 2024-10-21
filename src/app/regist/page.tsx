"use client";
import React, { useState } from 'react';
import "../styles/regist.css"; 
import Layout from '../components/Layout';

const Registrasi: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null); // Melacak form yang aktif (BPJS atau NON BPJS)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false); // Melacak status pengiriman form

  const handleBPJSClick = () => {
    setActiveForm("BPJS");
    setFormSubmitted(false); // Reset status submit
  };

  const handleNonBPJSClick = () => {
    setActiveForm("NON BPJS");
    setFormSubmitted(false); // Reset status submit
  };

  const handleCloseModal = () => {
    setActiveForm(null); // Tutup form
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasikan pengiriman data atau panggilan API untuk menyimpan data
    setFormSubmitted(true); // Set status form menjadi terkirim
  };

  const handleOkClick = () => {
    setActiveForm(null); // Tutup form
    setFormSubmitted(false); // Reset status form untuk siap digunakan kembali
  };

  return (
    <Layout>
      <div className="right-section">
        <button className="menu-btn" onClick={handleBPJSClick}>BPJS</button>
        <button className="menu-btn" onClick={handleNonBPJSClick}>NON BPJS</button>
      </div>

      {/* Tampilkan form registrasi BPJS atau NON BPJS */}
      {activeForm && !formSubmitted && (
        <div className="registration-container">
          <div className="modal">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h1>Registrasi {activeForm}</h1>
            <form onSubmit={handleFormSubmit}>
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

      {/* Tampilkan pesan sukses setelah form disubmit */}
      {formSubmitted && (
        <div className="registration-container">
          <div className="modal">
            <h2>Data berhasil disimpan!</h2>
            <p>Terima kasih telah melakukan registrasi {activeForm}. Silakan klik "OK" untuk kembali.</p>
            <button className="submit-btn" onClick={handleOkClick}>OK</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Registrasi;
