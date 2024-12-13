"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../setting/MainLayout";

interface Status {
  nomor: number;
  status: string;
  kode: string;
  durasi: string;
  keterangan: string;
}

const SettingsPage: React.FC = () => {
  const [statuss, setStatuss] = useState<Status[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [statusForm, setStatusForm] = useState<Status | null>(null);
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [error, setError] = useState<{ kode?: string }>({});

  useEffect(() => {
    fetch("/api/statuss")
      .then((res) => res.json())
      .then(setStatuss)
      .catch((error) => console.error("Error fetching statuss:", error));
  }, []);

  const handleStatusInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatusForm((prev) => ({ ...prev, [name]: value } as Status));
    if (name === "kode" && error.kode) {
      setError((prev) => ({ ...prev, kode: undefined })); // Reset error kode saat mengetik ulang
    }
  };

  const handleAddOrUpdateStatus = async () => {
    if (statusForm) {
      const method = isEditingStatus ? "PUT" : "POST";
      const url = isEditingStatus ? `/api/statuss` : `/api/statuss`;
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(statusForm),
        });
        const data = await res.json();
        if (!res.ok) {
          if (data.error && data.error.includes("Kode sudah ada")) {
            setError({ kode: "Kode ini sudah ada" });
          }
          return;
        }

        setError({}); // Reset error jika berhasil
        if (isEditingStatus) {
          setStatuss((prev) =>
            prev.map((status) => (status.nomor === data.nomor ? data : status))
          );
        } else {
          setStatuss((prev) => [...prev, data]);
        }
        setFormVisible(false);
        setStatusForm(null);
      } catch (error) {
        console.error("Error during Add/Update:", error);
      }
    }
  };

  const handleDeleteStatus = async () => {
    if (statusForm) {
      try {
        await fetch(`/api/statuss?nomor=${statusForm.nomor}`, {
          method: "DELETE",
        });
        setStatuss((prev) =>
          prev.filter((status) => status.nomor !== statusForm.nomor)
        );
        setFormVisible(false);
        setStatusForm(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRowStatusClick = (status: Status) => {
    setError({}); // Reset error saat memilih data
    setStatusForm(status);
    setIsEditingStatus(true);
    setFormVisible(true);
  };

  // Toggle visibilitas form
  const toggleForm = () => {
    setError({});
    setStatusForm(null);
    setIsEditingStatus(false);
    setFormVisible(!isFormVisible);
  };

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Tombol Tambah status */}
        <button
          onClick={toggleForm}
          style={{
            marginBottom: "15px",
            alignSelf: "flex-start",
            padding: "6px 6px", // Padding standar tombol
          }}
        >
          &#43; Tambah Status
        </button>
        {/* Kontainer utama untuk tabel dan form */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Tabel status */}
          <table>
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Status</th>
                <th>Durasi</th>
              </tr>
            </thead>
            <tbody>
              {statuss.map((status) => (
                <tr
                  key={status.nomor}
                  onClick={() => handleRowStatusClick(status)}
                >
                  <td>{status.nomor}</td>
                  <td>{status.status}</td>
                  <td>{status.durasi}</td>
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
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Kode*</label>
                      <input
                        type="text"
                        name="kode"
                        placeholder="Masukkan Status"
                        value={statusForm?.kode || ""}
                        onChange={handleStatusInputChange}
                      />
                      {error.kode && (
                        <small style={{ color: "red" }}>{error.kode}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Durasi*</label>
                      <input 
                      type="text" 
                      placeholder="Masukkan Durasi"
                      name="durasi"
                      value={statusForm?.durasi || ""} 
                      onChange={handleStatusInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Status*</label>
                      <input type="text" placeholder="Masukkan Kode" 
                       name="status"
                       value={statusForm?.status || ""} 
                       onChange={handleStatusInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Nama Lain</label>
                      <input type="text" placeholder="Masukkan Nama Lain" 
                       name="keterangan"
                       value={statusForm?.keterangan || ""} 
                       onChange={handleStatusInputChange}
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
                      onClick={handleAddOrUpdateStatus}
                    >
                      {isEditingStatus? "Update" : "Tambah"}
                    </button>
                    {isEditingStatus && (
                      <button
                        type="button"
                        className="delete-button"
                        onClick={handleDeleteStatus}
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
