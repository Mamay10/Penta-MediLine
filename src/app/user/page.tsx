"use client";
import React, { useState } from "react";
import MainLayout from "../setting/MainLayout";

interface User {
  nomor: number;
  username: string;
  password: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { nomor: 1, username: "Mamay Ayu Lestari", password: "123456" },
    { nomor: 2, username: "Kholidiyah Amna", password: "amal2023" },
    { nomor: 3, username: "Salsabila Shafiya", password: "caca" },
    { nomor: 4, username: "Anisa Putri", password: "098765" },
    { nomor: 5, username: "Mila Amelia", password: "amel678" },
    { nomor: 6, username: "Laras", password: "laras567" },
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
            marginBottom:"15px",
            alignSelf: "flex-start",
            padding: "6px 6px", // Padding standar tombol
          }}
        >
          &#43; Tambah User
        </button>

        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel User */}
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.nomor}>
                  <td>{user.nomor}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
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
                      <label>Username*</label>
                      <input type="text" placeholder="Masukkan Username" />
                    </div>
                    <div className="form-group">
                      <label>Nama lengkap</label>
                      <input type="text" placeholder="Masukkan Nama Lengkap" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Password*</label>
                      <input type="password" placeholder="Masukkan Password" />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>No. Telp*</label>
                        <input type="tel" placeholder="Masukkan No. Telepon" />
                      </div>
                      <div className="form-group">
                        <label>Tanggal Lahir*</label>
                        <input type="date" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="Masukkan Email" />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Jenis Kelamin</label>
                        <div className="radio-group">
                          <input type="radio" name="gender" value="Laki-laki" />{" "}
                          Laki-laki
                          <input
                            type="radio"
                            name="gender"
                            value="Perempuan"
                          />{" "}
                          Perempuan
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <select>
                          <option>Pilih Role</option>
                          <option>Dokter</option>
                          <option>Teller</option>
                        </select>
                      </div>
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

export default UserPage;
