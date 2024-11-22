//tampilan 
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
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

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

  useEffect(() => {
    fetch("/api/users", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data dari API:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleAddUserClick = () => {
    if (isFormVisible && !selectedUser) {
      // Jika form sedang terbuka untuk tambah user, reset dan tutup form
      setFormVisible(false);
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
    } else {
      // Jika form tertutup, tampilkan untuk tambah user
      setSelectedUser(null);
      setFormVisible(true);
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
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setNewUser({
      username: user.username,
      password: user.password,
      nama_lengkap: user.nama_lengkap || "",
      no_telp: user.no_telp || "",
      tanggal_lahir: formatDate(user.tanggal_lahir), // Format tanggal lahir
      email: user.email || "",
      jenis_kelamin: user.jenis_kelamin || "",
      role: user.role || "",
    });
    setFormVisible(true);
  };

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
      setUsers([...users, savedUser]);
      setFormVisible(false);
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

  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await fetch(`/api/users/${selectedUser.nomor}`, { method: "DELETE" });
        setUsers(users.filter((user) => user.nomor !== selectedUser.nomor));
        setSelectedUser(null);
        setFormVisible(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleCancelClick = () => {
    // Hanya untuk form tambah user
    setFormVisible(false);
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
  };
  
  const handleExitClick = () => {
    // Hanya untuk form data lengkap user
    setFormVisible(false);
    setSelectedUser(null);
  };

  

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };



  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={handleAddUserClick}
          style={{
            marginBottom: "15px",
            alignSelf: "flex-start",
            padding: "6px 6px",
          }}
        >
          &#43; Tambah User
        </button>

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
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
                <tr key={user.nomor} onClick={() => handleRowClick(user)}>
                  <td>{user.nomor}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
                      <div style={{ position: "relative", width: "100%" }}>
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Masukkan Password"
                          value={newUser.password}
                          onChange={(e) =>
                            setNewUser({ ...newUser, password: e.target.value })
                          }
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "145px",

                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={() => setPasswordVisible(!isPasswordVisible)}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="gray"
                              strokeWidth={2}
                              style={{ width: "20px", height: "20px" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.606C4.64 8.253 6.91 6 12 6c5.09 0 7.36 2.253 8.02 2.606m-16.04 0C5.88 7.86 7.55 7 12 7c4.45 0 6.12.86 7.02 1.606M3.98 8.606C5.88 9.342 7.55 10 12 10c4.45 0 6.12-.658 8.02-1.394m-16.04 0C3.02 9.618 2 10.5 2 12s1.02 2.382 1.98 2.606m0-3.212c0 1.212 1.39 2.182 2.42 2.98m0-3.192c0-1.212 1.39-2.182 2.42-2.98"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="white"
                              strokeWidth={2}
                              style={{ width: "20px", height: "20px" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5C7.5 4.5 4.5 6 2 12c2.5 6 5.5 7.5 10 7.5s7.5-1.5 10-7.5c-2.5-6-5.5-7.5-10-7.5z"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
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
                    {!selectedUser ? (
                      // Tombol Batal hanya untuk tambah user
                      <button
                        type="button"
                        className="cancel-button"
                        onClick={handleCancelClick}
                      >
                        Batal
                      </button>
                    ) : (
                      // Tombol Keluar hanya untuk data lengkap user
                      <button
                        type="button"
                        className="cancel-button"
                        onClick={handleExitClick}
                      >
                        Keluar
                      </button>
                    )}
                    <button type="submit" className="save-button">
                      Simpan
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
