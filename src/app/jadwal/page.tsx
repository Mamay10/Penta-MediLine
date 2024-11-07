"use client";
import React, { useState } from "react";
import MainLayout from "../setting/MainLayout";

interface Jadwal {
  nomor: number;
  kode: string;
  waktu: string;
}

const SettingsPage: React.FC = () => {
  const [users, setUsers] = useState<Jadwal[]>([
    { nomor: 1, kode: "S01", waktu: "07.00 - 10.00" },
    { nomor: 2, kode: "S02", waktu: "07.00 - 10.00" },
    { nomor: 3, kode: "S03", waktu: "07.00 - 10.00" },
    { nomor: 4, kode: "S04", waktu: "07.00 - 10.00" },
    { nomor: 5, kode: "M01", waktu: "07.00 - 10.00" },
    { nomor: 6, kode: "M01", waktu: "07.00 - 10.00" },
  ]);

  // State untuk mengontrol visibilitas form
  const [isFormVisible, setFormVisible] = useState(false);

  // Toggle visibilitas form
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <MainLayout>
      {/* Kontainer untuk tombol dan kontainer utama */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Tombol Tambah User */}
        <button
          onClick={toggleForm}
          style={{
            marginBottom: "15px",
            alignSelf: "flex-start",
            padding: "6px 6px", // Padding standar tombol
          }}
        >
          &#43; Tambah Jadwal
        </button>

        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel User */}
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Kode</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.nomor}>
                  <td>{user.nomor}</td>
                  <td>{user.kode}</td>
                  <td>{user.waktu}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Render form secara kondisional di samping tabel */}
          {isFormVisible && (
            <div style={{ flex: 1, marginTop: "-50px" }}>
              {" "}
              {/* Menambahkan marginTop negatif untuk menaikkan form */}
              <div className="form-container">
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Kode*</label>
                      <input type="text" placeholder="Masukkan Kode" />
                    </div>
                    <div className="form-group">
                      <label>Klinik*</label>
                      <select>
                        <option>Pilih Klinik</option>
                        <option>Poli umum</option>
                        <option>Poli Gigi</option>
                        {/* Additional options can be added here */}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Nama</label>
                      <input type="text" placeholder="Masukkan Nama" />
                    </div>
                    <div className="form-group">
                      <label>Jam masuk*</label>
                      <input type="time" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Dokter*</label>
                      <select>
                        <option>Pilih Dokter</option>
                        <option>Dr Rama</option>
                        <option>Dr Dara</option>
                        {/* Additional options can be added here */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Jam selesai*</label>
                      <input type="time" />
                    </div>
                  </div>
                  <div className="button-group">
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => setFormVisible(false)}
                    >
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
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
