"use client"; // Tambahkan ini di baris pertama

import { useState } from 'react';
import "../styles/bpjs.css"; // Buat file CSS untuk styling

const RegistrationForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [doctor, setDoctor] = useState('');
  const [clinic, setClinic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      cardNumber,
      doctor,
      clinic,
    });
    // You can add any action on form submit here (e.g., API call)
  };

  return (
    <div className="registration-container">
      <div className="modal">
        <button className="close-btn">X</button>
        <h2>Registrasi</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">No. Kartu</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Masukkan No Kartu"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Dokter*</label>
            <select
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >
              <option value="">Masukkan Nama Dokter</option>
              <option value="dr. John">dr. John</option>
              <option value="dr. Jane">dr. Jane</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="clinic">Klinik*</label>
            <select
              id="clinic"
              value={clinic}
              onChange={(e) => setClinic(e.target.value)}
              required
            >
              <option value="">Masukkan Klinik</option>
              <option value="Klinik A">Klinik A</option>
              <option value="Klinik B">Klinik B</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
