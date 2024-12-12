"use client"

import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";

interface Jadwal {
  nomor: number;
  kode: string;
  shift: string;
  jam_masuk: string;
  jam_selesai: string;
  dokter: string;
  poli: string;
}

interface Dokter {
  nomor: number;
  kode: string;
  nama: string;
}

interface Poli {
  nomor: number;
  kode: string;
  nama: string;
}

const SettingsPage: React.FC = () => {
  const [jadwals, setJadwals] = useState<Jadwal[]>([]);
  const [dokters, setDokters] = useState<Dokter[]>([]);
  const [polis, setPolis] = useState<Poli[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [jadwalForm, setJadwalForm] = useState<Jadwal | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<{ kode?: string }>({});

  useEffect(() => {
    fetch("/api/jadwals")
      .then((res) => res.json())
      .then((data) => setJadwals(data))
      .catch((error) => console.error("Error fetching jadwals:", error));

    fetch("/api/dokters")
      .then((res) => res.json())
      .then((data) => setDokters(data))
      .catch((error) => console.error("Error fetching dokters:", error));

    fetch("/api/polis")
      .then((res) => res.json())
      .then((data) => setPolis(data))
      .catch((error) => console.error("Error fetching polis:", error));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJadwalForm((prev) => ({ ...prev, [name]: value } as Jadwal));
    if (name === "kode" && error.kode) {
      setError((prev) => ({ ...prev, kode: undefined })); // Reset error kode saat mengetik ulang
    }
  };

  const handleAddOrUpdateJadwal = async () => {
    if (jadwalForm) {
      const method = isEditing ? "PUT" : "POST";
      const url = "/api/jadwals";
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jadwalForm),
        });

        const data = await res.json();
        if (!res.ok) {
          if (data.error && data.error.includes("Kode sudah ada")) {
            setError({ kode: "Kode ini sudah ada" });
          }
          return;
        }

        setError({}); // Reset error jika berhasil
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
    setError({}); // Reset error saat memilih data
    setJadwalForm(jadwal);
    setIsEditing(true);
    setFormVisible(true);
  };

  const toggleForm = () => {
    setError({}); // Reset error saat membuka atau menutup form
    setJadwalForm(null);
    setIsEditing(false);
    setFormVisible(!isFormVisible);
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={toggleForm}
          style={{ marginBottom: "15px", alignSelf: "flex-start", padding: "6px 6px" }}
        >
          &#43; Tambah Jadwal
        </button>

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
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
                  <td>
                    {jadwal.jam_masuk} - {jadwal.jam_selesai}
                  </td>
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
                      <label>Kode*</label>
                      <input
                        type="text"
                        name="kode"
                        placeholder="Masukkan Kode"
                        value={jadwalForm?.kode || ""}
                        onChange={handleInputChange}
                      />
                      {error.kode && <small style={{ color: "red" }}>{error.kode}</small>}
                    </div>
                    <div className="form-group">
                      <label>Poli*</label>
                      <select
                        name="poli"
                        value={jadwalForm?.poli || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">Pilih Poli</option>
                        {polis.map((poli) => (
                          <option key={poli.nomor} value={poli.kode}>
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
                      <select
                        name="dokter"
                        value={jadwalForm?.dokter || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">Pilih Dokter</option>
                        {dokters.map((dokter) => (
                          <option key={dokter.nomor} value={dokter.kode}>
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
