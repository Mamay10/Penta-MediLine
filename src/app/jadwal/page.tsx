"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";

interface Jadwal {
  nomor: number;
  kode: string;
  shift: string;
  jam_masuk: string;
  jam_selesai: string;
  dokter: string;
  poli : string
}

interface Dokter {
  kode: number;
  nama: string;
}

interface Poli {
  kode: number;
  nama: string;
}

const SettingsPage: React.FC = () => {
  const [jadwals, setJadwals] = useState<Jadwal[]>([]);
  const [dokters, setDokters] = useState<Dokter[]>([]);
  const [polis, setPolis] = useState<Poli[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [jadwalForm, setJadwalForm] = useState<Jadwal | null>(null);
  const [isEditing, setIsEditing] = useState(false);

useEffect(() => {
  fetch("/api/jadwals")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Jadwals:", data); // Log data yang diterima
      setJadwals(data);
    })
    .catch((error) => console.error("Error fetching jadwals:", error));

  fetch("/api/dokters")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Dokters:", data); // Log data yang diterima
      setDokters(data);
    })
    .catch((error) => console.error("Error fetching dokters:", error));

  fetch("/api/polis")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Polis:", data); // Log data yang diterima
      setPolis(data);
    })
    .catch((error) => console.error("Error fetching polis:", error));
}, []);



    // Handle Input Changes
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setJadwalForm((prev) => ({ ...prev, [name]: value } as Jadwal));
    };
  
  // CRUD jadwal
  const handleAddOrUpdateJadwal = async () => {
    if (jadwalForm) {
      const method = isEditing ? "PUT" : "POST";
      const url = "/api/jadwals";
      console.log("Request Body:", jadwalForm); // Log data yang akan dikirim
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jadwalForm),
        });
        const data = await res.json();
        console.log("Response Data:", data); // Log respons dari server
        if (isEditing) {
          setJadwals((prev) =>
            prev.map((jadwal) => (jadwal.nomor === data.nomor ? data : jadwal))
          );
        } else {
          setJadwals((prev) => [...prev, data]);
        }
        setFormVisible(false);
        setJadwalForm(null);
      } catch (error) {
        console.error("Error during Add/Update:", error);
      }
    }
  };
  

  const handleDeleteJadwal = async () => {
    if (jadwalForm) {
      try {
        await fetch(`/api/jadwals?nomor=${jadwalForm.nomor}`, {
          method: "DELETE",
        });
        setJadwals((prev) =>
          prev.filter((jadwal) => jadwal.nomor !== jadwalForm.nomor)
        );
        setFormVisible(false);
        setJadwalForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRowJadwalClick = (jadwal: Jadwal) => {
    setJadwalForm(jadwal);
    setIsEditing(true);
    setFormVisible(true);
  
  };


  // Toggle visibilitas form
  const toggleForm = () => {
    setJadwalForm(null); // Reset form
    setIsEditing(false); // Mode tambah
    setFormVisible(!isFormVisible); // Tampilkan atau sembunyikan form
  };

  return (
    <MainLayout>
      {/* Kontainer untuk tombol dan kontainer utama */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Tombol Tambah jadwal */}
        <button
          onClick={toggleForm}
          style={{
            marginBottom: "15px",
            alignSelf: "flex-start",
            padding: "6px 6px", // Padding standar tombol
          }}
        >
          &#43; Tambah Jadwal
        </button>

        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel jadwal */}
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Shift</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              {jadwals.map((jadwal) => (
                <tr
                  key={jadwal.nomor}
                  onClick={() => handleRowJadwalClick(jadwal)}
                >
                  <td>{jadwal.nomor}</td>
                  <td>{jadwal.shift}</td>
                  <td>{jadwal.jam_masuk} - {jadwal.jam_selesai}</td>
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
                <form
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label>Kode*</label>
                      <input
                        type="text"
                        name="kode"
                        placeholder="Masukkan Kode"
                        value={jadwalForm?.kode || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Poli*</label>
                      <select name="poli" value={jadwalForm?.poli || ""} onChange={handleInputChange}>
                        <option value="">Pilih Poli</option>
                        {polis.map((poli) => (
                          <option key={poli.kode} value={poli.nama}>
                            {poli.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Shift</label>
                      <input
                        type="text"
                        name="shift"
                        placeholder="Masukkan Shift"
                        value={jadwalForm?.shift || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Jam masuk*</label>
                      <input
                        type="time"
                        name="jam_masuk"
                        value={jadwalForm?.jam_masuk || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Dokter*</label>
                      <select name="dokter" value={jadwalForm?.dokter || ""} onChange={handleInputChange}>
                        <option value="">Pilih Dokter</option>
                        {dokters.map((dokter) => (
                          <option key={dokter.kode} value={dokter.nama}>
                            {dokter.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Jam selesai*</label>
                      <input
                        type="time"
                        name="jam_selesai"
                        value={jadwalForm?.jam_selesai || ""}
                        onChange={handleInputChange}
                      />
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
                    <button
                      type="submit"
                      className="save-button"
                      onClick={handleAddOrUpdateJadwal}
                    >
                      {isEditing ? "Update" : "Tambah"}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        className="delete-button"
                        onClick={handleDeleteJadwal}
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

export default SettingsPage;
