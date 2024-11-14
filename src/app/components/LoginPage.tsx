"use client"; // Tambahkan ini di baris pertama

// LoginPage.tsx
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "../styles/Login.css";
import Layout from "./Layout";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.role === "admin") {
        router.push("/dashboard");
      } else {
        alert("Login berhasil, tetapi Anda bukan admin");
        router.push("/user-dashboard");
      }
    } else {
      alert(data.message);
    }
  };

  return (
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
          <button type="submit" className="login-button">Masuk</button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;

