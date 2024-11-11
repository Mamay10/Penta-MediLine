"use client";
import React, { useState } from "react";
import MainLayout from "../setting/MainLayout";

interface Dokter {
  nomor: number;
  nama: string;
  kode: string;
}

interface Poli {
  nomor: number;
  nama: string;
  kode: string;
}

const SettingsPage: React.FC = () => {
  const [dokters, setDokters] = useState<Dokter[]>([
    { nomor: 1, nama: "Dr Raka", kode: "0987" },
    { nomor: 2, nama: "Dr Salma", kode: "6543" },
    { nomor: 3, nama: "Dr Yusuf", kode: "2109" },
  ]);
  
  const [polis, setPolis] = useState<Poli[]>([
    { nomor: 1, nama: "Poli Umum", kode: "PU01" },
    { nomor: 2, nama: "Poli Gigi", kode: "PG01" },
  ]);

  const [isDokterFormVisible, setDokterFormVisible] = useState(false);
  const [isPoliFormVisible, setPoliFormVisible] = useState(false);

  const toggleDokterForm = () => {
    setDokterFormVisible(!isDokterFormVisible);
    setPoliFormVisible(false); // Menyembunyikan form Poli saat form Dokter dibuka
  };

  const togglePoliForm = () => {
    setPoliFormVisible(!isPoliFormVisible);
    setDokterFormVisible(false); // Menyembunyikan form Dokter saat form Poli dibuka
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
        <div >
          <button onClick={toggleDokterForm} style={{ marginRight: "10px", marginBottom:"15px"}}>
            + Tambah Dokter
          </button>
          <button onClick={togglePoliForm}>
            + Tambah Poli
          </button>
        </div>

        {/* Tampilkan Tabel dan Form Dokter jika tombol "Tambah Dokter" diklik */}
        {isDokterFormVisible && (
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Kode</th>
                </tr>
              </thead>
              <tbody>
                {dokters.map((dokter) => (
                  <tr key={dokter.nomor}>
                    <td>{dokter.nomor}</td>
                    <td>{dokter.nama}</td>
                    <td>{dokter.kode}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="form-container" style={{ flex: 1, marginTop: "5px" }}>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Kode*</label>
                    <input type="text" placeholder="Masukkan Kode" />
                  </div>
                  <div className="form-group">
                    <label>Nama lengkap</label>
                    <input type="text" placeholder="Masukkan Nama Lengkap" />
                  </div>
                </div>
                <div className="button-group">
                  <button type="button" className="cancel-button" onClick={() => setDokterFormVisible(false)}>
                    Batal
                  </button>
                  <button type="submit" className="save-button">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tampilkan Tabel dan Form Poli jika tombol "Tambah Poli" diklik */}
        {isPoliFormVisible && (
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Kode</th>
                </tr>
              </thead>
              <tbody>
                {polis.map((poli) => (
                  <tr key={poli.nomor}>
                    <td>{poli.nomor}</td>
                    <td>{poli.nama}</td>
                    <td>{poli.kode}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="form-container"  style={{ flex: 1, marginTop: "5px" }}>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Kode*</label>
                    <input type="text" placeholder="Masukkan Kode" />
                  </div>
                  <div className="form-group">
                    <label>Nama Poli</label>
                    <input type="text" placeholder="Masukkan Nama Poli" />
                  </div>
                </div>
                <div className="button-group">
                  <button type="button" className="cancel-button" onClick={() => setPoliFormVisible(false)}>
                    Batal
                  </button>
                  <button type="submit" className="save-button">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
