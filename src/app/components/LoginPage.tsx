"use client";
import React, { useState } from "react";
import "./Login.css"; // Create corresponding CSS for styling

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login clicked", { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" />
       
      </div>
      <div className="decorative-image">
          <img src="/assets/icon Login.png" alt="Gambar Dekoratif" />
      </div>
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
    </div>
  );
};

export default LoginPage;
