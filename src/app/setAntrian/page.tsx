"src/app/setAntrian/page";

"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";
import "../styles/setAntrian.css";

interface Dokter {
  nomor: number;
  nama: string;
  kode: string;
}

interface Poli {
  nomor: number;
  nama: string;
  kode: string;
}

const SettingsPage: React.FC = () => {
  const [dokters, setDokters] = useState<Dokter[]>([]);
  const [dokterForm, setDokterForm] = useState<Dokter | null>(null);
  const [isDokterFormVisible, setDokterFormVisible] = useState(false);
  const [isEditingDokter, setIsEditingDokter] = useState(false);

  const [polis, setPolis] = useState<Poli[]>([]);
  const [isPoliFormVisible, setPoliFormVisible] = useState(false);
  const [poliForm, setPoliForm] = useState<Poli | null>(null);
  const [isEditingPoli, setIsEditingPoli] = useState(false);

  // Fetch data Dokter dan Poli dari API
  useEffect(() => {
    fetch("/api/dokters")
      .then((res) => res.json())
      .then(setDokters)
      .catch(console.error);

    fetch("/api/polis")
      .then((res) => res.json())
      .then(setPolis)
      .catch(console.error);
  }, []);

  // Fungsi untuk menangani perubahan input Dokter
  const handleDokterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDokterForm((prev) => ({ ...prev, [name]: value } as Dokter));
  };
  
  // CRUD Dokter
  const handleAddOrUpdateDokter = async () => {
    if (dokterForm) {
      const method = isEditingDokter ? "PUT" : "POST";
      const url = isEditingDokter ? `/api/dokters` : `/api/dokters`;
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dokterForm),
        });
        const data = await res.json();
        if (isEditingDokter) {
          setDokters((prev) =>
            prev.map((dokter) => (dokter.nomor === data.nomor ? data : dokter))
          );
        } else {
          setDokters((prev) => [...prev, data]);
        }
        setDokterFormVisible(false);
        setDokterForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };
 const handleDeleteDokter = async () => {
    if (dokterForm) {
      try {
        await fetch(`/api/dokters?nomor=${dokterForm.nomor}`, {
          method: "DELETE",
        });
        setDokters((prev) =>
          prev.filter((dokter) => dokter.nomor !== dokterForm.nomor)
        );
        setDokterFormVisible(false);
        setDokterForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };  

  const handleRowDokterClick = (dokter: Dokter) => {
    setDokterForm(dokter);
    setIsEditingDokter(true);
    setDokterFormVisible(true);
  };

  // Fungsi untuk menangani perubahan input Poli
  const handlePoliInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPoliForm((prev) => ({ ...prev, [name]: value } as Poli));
  };

  // CRUD Poli
  const handleAddOrUpdatePoli = async () => {
    if (poliForm) {
      const method = isEditingPoli ? "PUT" : "POST";
      const url = isEditingPoli ? `/api/polis` : `/api/polis`;
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(poliForm),
        });
        const data = await res.json();
        if (isEditingPoli) {
          setPolis((prev) =>
            prev.map((poli) => (poli.nomor === data.nomor ? data : poli))
          );
        } else {
          setPolis((prev) => [...prev, data]);
        }
        setPoliFormVisible(false);
        setPoliForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeletePoli = async () => {
    if (poliForm) {
      try {
        await fetch(`/api/polis?nomor=${poliForm.nomor}`, { method: "DELETE" });
        setPolis((prev) =>
          prev.filter((poli) => poli.nomor !== poliForm.nomor)
        );
        setPoliFormVisible(false);
        setPoliForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRowPoliClick = (poli: Poli) => {
    setPoliForm(poli);
    setIsEditingPoli(true);
    setPoliFormVisible(true);
  };


  // Toggle forms
  const toggleDokterForm = (dokter?: Dokter) => {
    setDokterFormVisible(true);
    setPoliFormVisible(false);
    setDokterForm(dokter || { nomor: 0, nama: "", kode: "" });
    setIsEditingDokter(!!dokter);
  };

  const togglePoliForm = (poli?: Poli) => {
    setPoliFormVisible(true);
    setDokterFormVisible(false);
    setPoliForm(poli || { nomor: 0, nama: "", kode: "" });
    setIsEditingPoli(!!poli);
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
        <div>
          <button
            onClick={() => toggleDokterForm()}
            style={{ marginRight: "10px" }}
          >
            + Tambah Dokter
          </button>
          <button onClick={() => togglePoliForm()}>+ Tambah Poli</button>
        </div>

        {/* Tampilkan Tabel dan Form Dokter jika tombol "Tambah Dokter" diklik */}
        {isDokterFormVisible && (
          <div
            style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
          >
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Kode</th>
                </tr>
              </thead>
              <tbody>
                {dokters.map((dokter) => (
                  <tr
                    key={dokter.nomor}
                    onClick={() => handleRowDokterClick(dokter)}
                  >
                    <td>{dokter.nomor}</td>
                    <td>{dokter.nama}</td>
                    <td>{dokter.kode}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              className="form-container"
              style={{ flex: 1, marginTop: "5px" }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Kode*</label>
                    <input
                      type="text"
                      name="kode"
                      placeholder="Masukkan Kode"
                      value={dokterForm?.kode || ""}
                      onChange={handleDokterInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nama lengkap</label>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Masukkan Nama Lengkap"
                      value={dokterForm?.nama || ""}
                      onChange={handleDokterInputChange}
                    />
                  </div>
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setDokterFormVisible(false)}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="save-button"
                    onClick={handleAddOrUpdateDokter}
                  >
                    {isEditingDokter ? "Update" : "Tambah"}
                  </button>
                  {isEditingDokter && (
                    <button
                      type="button"
                      className="delete-button"
                      onClick={handleDeleteDokter}
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tampilkan Tabel dan Form Poli jika tombol "Tambah Poli" diklik */}
        {isPoliFormVisible && (
          <div
            style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
          >
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Kode</th>
                </tr>
              </thead>
              <tbody>
                {polis.map((poli) => (
                  <tr key={poli.nomor} onClick={() => handleRowPoliClick(poli)}>
                    <td>{poli.nomor}</td>
                    <td>{poli.nama}</td>
                    <td>{poli.kode}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              className="form-container"
              style={{ flex: 1, marginTop: "5px" }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Kode*</label>
                    <input
                      type="text"
                      name="kode"
                      placeholder="Masukkan Kode"
                      value={poliForm?.kode || ""}
                      onChange={handlePoliInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nama Poli</label>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Masukkan Nama Poli"
                      value={poliForm?.nama || ""}
                      onChange={handlePoliInputChange}
                    />
                  </div>
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setPoliFormVisible(false)}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="save-button"
                    onClick={handleAddOrUpdatePoli}
                  >
                    {isEditingPoli ? "Update" : "Tambah"}
                  </button>
                  {isEditingPoli && (
                    <button
                      type="button"
                      className="delete-button"
                      onClick={handleDeletePoli}
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
    </MainLayout>
  );
};

export default SettingsPage;
