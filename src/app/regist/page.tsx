"use client";
import React, { useState } from "react";
import "../styles/regist.css"; // CSS khusus untuk styling
import Layout from "../components/Layout"; // Layout umum
import { registerBPJS, registerNonBPJS } from "../api/api"; // Fungsi API untuk pengiriman data

const Registrasi: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null); // Melacak jenis form yang aktif
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false); // Status pengiriman form

  // Fungsi untuk mengatur form yang aktif (BPJS atau NON BPJS)
  const handleFormSelect = (formType: "BPJS" | "NON BPJS") => {
    setActiveForm(formType);
    setFormSubmitted(false); // Reset status submit
  };

  const handleCloseModal = () => {
    setActiveForm(null); // Tutup form
    setFormSubmitted(false); // Reset status form untuk digunakan kembali
  };

  // Fungsi untuk menangani pengiriman form
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ambil data dari form
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      if (activeForm === "BPJS") {
        const response = await registerBPJS(data);
        alert(`Registrasi BPJS berhasil! Data: ${JSON.stringify(response.data)}`);
      } else if (activeForm === "NON BPJS") {
        const response = await registerNonBPJS(data);
        alert(`Registrasi NON BPJS berhasil! Data: ${JSON.stringify(response.data)}`);
      }
      setFormSubmitted(true);
    } catch (error: any) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal mengirim data. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div className="registration-page">
        {/* Tombol untuk memilih jenis registrasi */}
        <div className="right-section">
          <button className="menu-btn" onClick={() => handleFormSelect("BPJS")}>
            BPJS
          </button>
          <button className="menu-btn" onClick={() => handleFormSelect("NON BPJS")}>
            NON BPJS
          </button>
        </div>

        {/* Form registrasi aktif */}
        {activeForm && !formSubmitted && (
          <div className="registration-container">
            <div className="modal">
              <button className="close-btn" onClick={handleCloseModal}>
                X
              </button>
              <h1>Registrasi {activeForm}</h1>
              <form onSubmit={handleFormSubmit}>
                {/* Form BPJS */}
                {activeForm === "BPJS" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="no_kartu">No. Kartu</label>
                      <input
                        type="text"
                        id="no_kartu"
                        name="no_kartu"
                        placeholder="Masukkan No. Kartu BPJS"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Form NON BPJS */}
                {activeForm === "NON BPJS" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="nik">NIK</label>
                      <input
                        type="text"
                        id="nik"
                        name="nik"
                        placeholder="Masukkan NIK"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Form umum untuk BPJS dan NON BPJS */}
                <div className="form-group">
                  <label htmlFor="nama">Nama</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    placeholder="Masukkan Nama Lengkap"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                  <input
                    type="date"
                    id="tanggal_lahir"
                    name="tanggal_lahir"
                    placeholder="Masukkan Tanggal Lahir"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="alamat">Alamat</label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    placeholder="Masukkan Alamat"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="no_telp">No. Telepon</label>
                  <input
                    type="text"
                    id="no_telp"
                    name="no_telp"
                    placeholder="Masukkan No. Telepon"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dokter">Dokter</label>
                  <select id="dokter" name="dokter" required>
                    <option value="">Pilih Dokter</option>
                    <option value="dr. John">dr. John</option>
                    <option value="dr. Jane">dr. Jane</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="klinik">Klinik</label>
                  <select id="klinik" name="klinik" required>
                    <option value="">Pilih Klinik</option>
                    <option value="Klinik A">Klinik A</option>
                    <option value="Klinik B">Klinik B</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Pesan sukses setelah pengiriman form */}
        {formSubmitted && (
          <div className="registration-container">
            <div className="modal">
              <h2>Data berhasil disimpan!</h2>
              <p>
                Terima kasih telah melakukan registrasi {activeForm}. Klik "OK" untuk
                kembali.
              </p>
              <button className="submit-btn" onClick={handleCloseModal}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Registrasi;
