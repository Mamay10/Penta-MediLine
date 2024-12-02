"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";

interface User {
  nomor: number;
  username: string;
  password: string;
  nama_lengkap?: string;
  no_telp?: string;
  tanggal_lahir?: string;
  email?: string;
  jenis_kelamin?: string;
  role?: string;
}

const UserPage: React.FC = () => {
  // Hapus data statis di sini
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // User yang dipilih
  // State untuk mengontrol visibilitas form
  const [isFormVisible, setFormVisible] = useState(false);

  // State untuk menyimpan data input dari form
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    nama_lengkap: "",
    no_telp: "",
    tanggal_lahir: "",
    email: "",
    jenis_kelamin: "",
    role: "",
  });

  // Mengambil data user dari API ketika halaman dimuat
  useEffect(() => {
    fetch("/api/users", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data dari API:", data);
        setUsers(data); // Perbarui state users dengan data dari API
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleAddUserClick = () => {
    setSelectedUser(null); // Reset pilihan user
    setNewUser({
      username: "",
      password: "",
      nama_lengkap: "",
      no_telp: "",
      tanggal_lahir: "",
      email: "",
      jenis_kelamin: "",
      role: "",
    });
    setFormVisible(true); // Tampilkan form
  };

  // Fungsi untuk memilih user dari tabel
  const handleRowClick = (user: User) => {
    setSelectedUser(user); // Set user yang dipilih
    setNewUser({
      username: user.username,
      password: user.password,
      nama_lengkap: user.nama_lengkap || "",
      no_telp: user.no_telp || "",
      tanggal_lahir: user.tanggal_lahir || "",
      email: user.email || "",
      jenis_kelamin: user.jenis_kelamin || "",
      role: user.role || "",
    });
    setFormVisible(true); // Tampilkan form
  };

  // Fungsi untuk menambah user baru ke database melalui API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const savedUser = await response.json();
      console.log("savedUser:", savedUser);
      setUsers([...users, savedUser]); // Tambahkan data baru ke users
      setFormVisible(false);
      // Reset form setelah berhasil menambah user
      setNewUser({
        username: "",
        password: "",
        nama_lengkap: "",
        no_telp: "",
        tanggal_lahir: "",
        email: "",
        jenis_kelamin: "",
        role: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fungsi untuk menghapus user
  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await fetch('/api/users/${selectedUser.nomor}', { method: "DELETE" });
        setUsers(users.filter((user) => user.nomor !== selectedUser.nomor));
        setSelectedUser(null);
        setFormVisible(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // Fungsi untuk membatalkan perubahan
  const handleCancelChanges = () => {
    setSelectedUser(null); // Batalkan user yang dipilih
    setFormVisible(false); // Sembunyikan form
   
  };
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
            padding: "6px 6px",
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
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Username*</label>
                      <input
                        type="text"
                        placeholder="Masukkan Username"
                        value={newUser.username}
                        onChange={(e) =>
                          setNewUser({ ...newUser, username: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Nama lengkap</label>
                      <input
                        type="text"
                        placeholder="Masukkan Nama Lengkap"
                        value={newUser.nama_lengkap}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            nama_lengkap: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Password*</label>
                      <input
                        type="password"
                        placeholder="Masukkan Password"
                        value={newUser.password}
                        onChange={(e) =>
                          setNewUser({ ...newUser, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>No. Telp*</label>
                        <input
                          type="tel"
                          placeholder="Masukkan No. Telepon"
                          value={newUser.no_telp}
                          onChange={(e) =>
                            setNewUser({ ...newUser, no_telp: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Tanggal Lahir*</label>
                        <input
                          type="date"
                          value={newUser.tanggal_lahir}
                          onChange={(e) =>
                            setNewUser({
                              ...newUser,
                              tanggal_lahir: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Masukkan Email"
                        value={newUser.email}
                        onChange={(e) =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Jenis Kelamin</label>
                        <div className="radio-group">
                          <input
                            type="radio"
                            name="gender"
                            value="Laki-laki"
                            checked={newUser.jenis_kelamin === "Laki-laki"}
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                jenis_kelamin: e.target.value,
                              })
                            }
                          />{" "}
                          Laki-laki
                          <input
                            type="radio"
                            name="gender"
                            value="Perempuan"
                            checked={newUser.jenis_kelamin === "Perempuan"}
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                jenis_kelamin: e.target.value,
                              })
                            }
                          />{" "}
                          Perempuan
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <select
                          value={newUser.role}
                          onChange={(e) =>
                            setNewUser({ ...newUser, role: e.target.value })
                          }
                        >
                          <option>Pilih Role</option>
                          <option>Dokter</option>
                          <option>Teller</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="button-container">
                    <button type="submit" className="save-button">
                      Simpan{" "}
                    </button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={handleCancelChanges}
                    >
                      Batal
                    </button>
                    {selectedUser && (
                      <button
                        type="button"
                        className="hapus-button"
                        onClick={handleDelete}
                      >
                        Hapus
                      </button>
                    )}
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