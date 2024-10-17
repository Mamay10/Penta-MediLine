"use client"; // Tambahkan ini di baris pertama

import { useRouter } from 'next/navigation'; // Ganti next/router dengan next/navigation
import { useState } from 'react';
import "../styles/Login.css"; // Buat file CSS untuk styling
import Layout from "./Layout";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Menggunakan next/navigation

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      router.push("/dashboard"); // Redirect ke dashboard
    } else {
      alert("Login gagal");
    }
  };

  return (
    <Layout  imageSrc="/assets/icon login.png"  
    secondImageClassName="extra-login-image"  // ClassName khusus untuk gambar tambahan di Login
>
      <div className="login-card">
        <h2>Silahkan Masuk</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="username">Nama Pengguna</label>
            <input
              type="text"
              id="username"
              placeholder="Masukan nama pengguna"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              id="password"
              placeholder="Masukan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Lupa Kata Sandi?</a>
          </div>
          <button type="submit" className="login-button">
            Masuk
          </button>
        </form>
        {/* Menambahkan gambar dekoratif */}
      </div>
    </Layout>
  );
};

export default LoginPage;
