"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import "../styles/Login.css";
import Layout from "./Layout";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State untuk opsi Remember Me
  const router = useRouter();

  useEffect(() => {
    // Cek apakah ada data tersimpan di localStorage saat komponen pertama kali di-render
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");

    // Jika ada data tersimpan, isi input dengan data tersebut
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        localStorage.setItem('token', data.token); // Simpan token di localStorage

        // Jika Remember Me dicentang, simpan username dan password di localStorage
        if (rememberMe) {
          localStorage.setItem("savedUsername", username);
          localStorage.setItem("savedPassword", password);
        } else {
          // Jika Remember Me tidak dicentang, hapus data username dan password yang tersimpan
          localStorage.removeItem("savedUsername");
          localStorage.removeItem("savedPassword");
        }

        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat login");
    }
  };

  return (
    <Layout imageSrc="/assets/icon login.png" secondImageClassName="extra-login-image">
    <Layout imageSrc="/assets/icon login.png" secondImageClassName="extra-login-image">
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
          <div className="remember-me-main">
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Ingat saya</label>
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Lupa Kata Sandi?</a>
          </div>
          </div>
          <button type="submit" className="login-button">
            Masuk
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;

