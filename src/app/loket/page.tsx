"use client";
import React, { useState } from "react";
import MainLayout from "../setting/MainLayout";

interface Loket {
  nomor: number;
  nama: string;
  jenis: string;
}

const SettingsPage: React.FC = () => {
  const [users, setUsers] = useState<Loket[]>([]);

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
            marginBottom:"15px",
            alignSelf: "flex-start",
            padding: "6px 6px", // Padding standar tombol
          }}
        >
          &#43; Tambah Loket
        </button>
        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel User */}
              <table>
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Nama</th>
                    <th>Jenis</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.nomor}>
                      <td>{user.nomor}</td>
                      <td>{user.nama}</td>
                      <td>{user.jenis}</td>
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
                      <label>Nama</label>
                      <input type="text" placeholder="Masukkan Nama" />
                    </div>
                   
                  </div>

                  <div className="form-row">
                  <div className="form-group">
                      <label>Poli</label>
                      <select>
                        <option>Pilih poli</option>
                        <option>Poli Umum</option>
                        <option>Poli Gigi</option>
                        {/* Additional options can be added here */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Jenis Loket</label>
                      <select>
                        <option>Pilih Jenis Loket</option>
                        <option>BPJS</option>
                        <option>NON BPJS</option>
                        {/* Additional options can be added here */}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Kode Antrian</label>
                      <input type="text" placeholder="Masukkan Kode Antrian" />
                    </div>
                  </div>

                  <div className="button-group">
                    <button type="button" className="cancel-button"  onClick={() => setFormVisible(false)}>
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
