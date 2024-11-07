"use client";
import React, { useState } from "react";
import MainLayout from "../setting/MainLayout";

interface Status {
  nomor?: number;
  status?: string;
  kode?: string;
  durasi?: string;
}

const SettingsPage: React.FC = () => {
  const [users, setUsers] = useState<Status[]>([
    { nomor: 1, status: "Active", kode: "A001", durasi: "10 mins" },
    { nomor: 2, status: "Inactive", kode: "A002", durasi: "15 mins" },
    { nomor: 3, status: "Pending", kode: "A003", durasi: "5 mins" },
    { nomor: 4, status: "", kode: "", durasi: "" },
    { nomor: 5, status: "", kode: "", durasi: "" },
    { nomor: 6, status: "", kode: "", durasi: "" },
  ]);

  // State untuk mengontrol visibilitas form
  const [isFormVisible, setFormVisible] = useState(false);

  // Toggle visibilitas form
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <MainLayout>
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
          &#43; Tambah Status
        </button>
        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel User */}
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Status</th>
                <th>Kode</th>
                <th>Durasi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((status) => (
                <tr key={status.nomor}>
                  <td>{status.nomor || "-"}</td>
                  <td>{status.status || "-"}</td>
                  <td>{status.kode || "-"}</td>
                  <td>{status.durasi || "-"}</td>
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
                      <label>Status*</label>
                      <input type="text" placeholder="Masukkan Status" />
                    </div>
                    <div className="form-group">
                      <label>Durasi*</label>
                      <input type="text" placeholder="Masukkan Durasi" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Kode</label>
                      <input type="text" placeholder="Masukkan Kode" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Nama Lain</label>
                      <input type="text" placeholder="Masukkan Nama Lain" />
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
