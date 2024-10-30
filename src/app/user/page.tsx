"use client"
import React, { useState } from "react";
import '../styles/user.css';

interface User {
    nomor: number;
    username: string;
    password: string;
}

const SettingsPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { nomor: 1, username: "Mamay Ayu Lestari", password: "123456" },
        { nomor: 2, username: "Kholidiyah Amna", password: "amal2023" },
        { nomor: 3, username: "Salsabila Shafiya", password: "caca" },
        { nomor: 4, username: "Anisa Putri", password: "098765" },
        { nomor: 5, username: "Mila Amelia", password: "amel678" },
        { nomor: 6, username: "Laras", password: "laras567" },
      ]);
    
  return (
    <div className="container">
      {/* Logo Section (top-left) */}
      <aside className="logoSection">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Header Section (spanning full width) */}
      <header className="headerSection">
        <img src="/assets/Vector.png" alt="Vector" className="vector" />
        <span className="pageTitle">PENGATURAN</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>

      {/* Content Section (buttons and image) */}
      <div className="contentContainer">
      <div className="contentSection">
        {/* Button Section */}
        <div className="buttonContainer">
          <button className="button">
          <a href="/user">User</a>
          </button>
          <button className="button">Status</button>
          <button className="button">Antrian</button>
          <button className="button">Jadwal</button>
          <button className="button">Loket</button>
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <button style={{ marginBottom: "10px" }}>+ Tambah User</button>
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
      </div>
      <div style={{ flex: 1 }}>
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
              <input type="radio" name="gender" value="Laki-laki" /> Laki-laki
              <input type="radio" name="gender" value="Perempuan" /> Perempuan
            </div>
          </div>
          <div className="form-group">
            <label>Role</label>
            <select>
              <option>Pilih Role</option>
              <option>Loket 1</option>
              <option>Loket 2</option>
              {/* Additional options can be added here */}
            </select>
          </div>
        </div> 
        </div>


        <div className="button-group">
          <button type="button" className="cancel-button">Batal</button>
          <button type="submit" className="save-button">Simpan</button>
        </div>
      </form>
    </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
