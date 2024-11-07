"use client"
import React, { useEffect, useState } from 'react';
import '../styles/queue.css';

interface QueueEntry {
  id: string;
  name: string;
  time: string;
  doctor: string;
  clinic: string;
  status: 'waiting' | 'called' | 'finished';
}

const AntrianPage: React.FC = () => {
  const [queue, setQueue] = useState<QueueEntry[]>([]);

  useEffect(() => {
    // Mengambil data antrian dari API
    const fetchQueue = async () => {
      const response = await fetch('/api/queue');
      const data = await response.json();
      setQueue(data);
    };

    fetchQueue();
  }, []);

  // Fungsi untuk memanggil antrian
  const callQueue = async (id: string) => {
    await fetch(`/api/queue/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'called' }),
    });
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'called' } : item));
  };

  // Fungsi untuk menandai antrian sebagai selesai
  const finishQueue = async (id: string) => {
    await fetch(`/api/queue/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'finished' }),
    });
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'finished' } : item));
  };

  return (
    <div className="container">
       <aside className="logoSection">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Header Section (spanning full width) */}
      <header className="headerSection">
        <img src="/assets/Vector.png" alt="Vector" className="vector" />
        <span className="pageTitle"> PANGGIL ANTRIAN</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>

      {/* Content Section */}
      <div className="contentContainer">
        <div className="sidebar">
          <div className="filterSection">
            <h3>Filter Berdasarkan</h3>
            <div>
              <label><input type="checkbox" /> Dipanggil</label>
              <label><input type="checkbox" /> Menunggu</label>
            </div>
          </div>
          <table className="queueTable">
            <thead>
              <tr>
                <th>Nomor Antrian</th>
                <th>Nama</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
            {queue.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                  <td>{entry.time}</td>
                  <td>
                    {entry.status === 'waiting' && (
                      <button onClick={() => callQueue(entry.id)}>Panggil</button>
                    )}
                    {entry.status === 'called' && (
                      <button onClick={() => finishQueue(entry.id)}>Selesai</button>
                    )}
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        <main className="mainContent">
          <div className="queueSection">
            <h2>Nomor Antrian</h2>
            <div className="queueNumber">BA01</div>
            <p>Dokter: Dr. Maulana Malik</p>
            <button className="primaryBtn">Panggil</button>
            <button className="secondaryBtn">Selesai</button>
          </div>

          <div className="patientInfo">
            <h2>Data Pasien</h2>
            <form>
              <label>Jenis</label>
              <input type="text" value="Pasien BPJS" readOnly />

              <label>Nama</label>
              <input type="text" value="Mamay Ayu Lestari" readOnly />

              <label>Dokter</label>
              <input type="text" value="Dr. Maulana Malik" readOnly />

              <label>Klinik</label>
              <input type="text" value="Poli Umum" readOnly />
            </form>
            <div className='btn-container'>
            <button className="tertiaryBtn">Lewati</button>
            <button className="nextBtn">Panggil Next</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AntrianPage;
  