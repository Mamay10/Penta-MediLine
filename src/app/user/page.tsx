//tampilan
"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";

interface User {
  nomor: number;
  id: number;
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
  const [isFormVisible, setFormVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [userForm, setUserForm] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<{ id?: string; username?: string }>({});


  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users received:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value } as User));
  
    if (name === "tanggal_lahir") {
      const formattedValue = value; // `value` sudah dalam format YYYY-MM-DD
      setUserForm((prev) => ({ ...prev, [name]: formattedValue } as User));
    } else {
      setUserForm((prev) => ({ ...prev, [name]: value } as User));
    }

    // Reset error untuk input yang sedang diubah
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  

  const handleAddOrUpdateUser = async () => {
    if (userForm) {
      const method = isEditing ? "PUT" : "POST";
      const url = "/api/users";
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userForm),
        });

        const data = await res.json();
        if (data.error) {
          if (data.error.includes("id sudah ada")) {
            setError((prev) => ({ ...prev, id: "ID ini sudah ada" }));
          }
          if (data.error.includes("username sudah ada")) {
            setError((prev) => ({ ...prev, username: "Username ini sudah ada" }));
          }
          return;
        }
        

        setError({}); // Reset error jika berhasil
        if (isEditing) {
          setUsers((prev) =>
            prev.map((user) => (user.nomor === data.nomor ? data : user))
          );
        } else {
          setUsers((prev) => [...prev, data]);
        }
        setFormVisible(false);
        setUserForm(null);
      } catch (error) {
        console.error("Error during Add/Update:", error);
      }
    }
  };



  const handleRowClick = (user: User) => {
    setError({});
    setUserForm(user);
    console.log("User clicked:", user);  // Pastikan tanggal_lahir ada
    setIsEditing(true);
    setFormVisible(true);
  };
  
  const handleDelete = async () => {
    if (userForm) {
      try {
        await fetch(`/api/users?nomor=${userForm.nomor}`, { method: "DELETE" });
        setUsers((prev) =>
          prev.filter((user) => user.nomor !== userForm.nomor)
        );
        setFormVisible(false);
        setUserForm(null);
      } catch (error) {
        console.error("Error:", error);
      }
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

  const toggleForm = () => {
    setError({});
    setUserForm(null);
    setIsEditing(false);
    setFormVisible(!isFormVisible);
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
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

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.nomor} onClick={() => handleRowClick(user)}>
                  <td>{user.nomor}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {isFormVisible && (
            <div style={{ flex: 1, marginTop: "-50px" }}>
              <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>ID*</label>
                      <input
                        type="text"
                        name="id"
                        placeholder="Masukkan Nomor ID"
                        value={userForm?.id || ""}
                        onChange={handleInputChange}
                      />
                      {error.id && (
                        <small style={{ color: "red" }}>{error.id}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Username*</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Masukkan Username"
                        value={userForm?.username || ""}
                        onChange={handleInputChange}
                      />
                      {error.username && (
                        <small style={{ color: "red" }}>{error.username}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Nama lengkap</label>
                      <input
                        type="text"
                        name="nama_lengkap"
                        placeholder="Masukkan Nama Lengkap"
                        value={userForm?.nama_lengkap || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Password*</label>
                      <div style={{ position: "relative", width: "0%" }}>
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          name="password"
                          placeholder="Masukkan Password"
                          value={userForm?.password}
                          onChange={handleInputChange}
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
                          name="no_telp"
                          placeholder="Masukkan No. Telepon"
                          value={userForm?.no_telp}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Tanggal Lahir*</label>
                        <input
                          type="date"
                          name="tanggal_lahir"
                          value={userForm?.tanggal_lahir}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Masukkan Email"
                        value={userForm?.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Jenis Kelamin</label>
                        <div className="radio-group">
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="Laki-laki"
                            checked={userForm?.jenis_kelamin === "Laki-laki"}
                            onChange={handleInputChange}
                            style={{
                              accentColor: "blue", // Warna biru untuk radio button
                            }}
                          />{" "}
                          Laki-laki
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="Perempuan"
                            checked={userForm?.jenis_kelamin === "Perempuan"}
                            onChange={handleInputChange}
                            style={{
                              accentColor: "blue", // Warna biru untuk radio button
                            }}
                          />{" "}
                          Perempuan
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <select
                          name="role"
                          value={userForm?.role || ""}
                          onChange={handleInputChange}
                        >
                          <option value="">Pilih Role</option>
                          <option value="Admin">Admin</option>
                          <option value="Teller">Teller</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="button-container">
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={toggleForm}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="save-button"
                      onClick={handleAddOrUpdateUser}
                    >
                      {isEditing ? "Update" : "Tambah"}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        className="delete-button"
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
