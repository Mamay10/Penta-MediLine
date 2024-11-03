<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panggil Pasien</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #2C2C2C;
    }
    .header, .content {
      background-color: #2C6A6A;
      border-radius: 10px;
    }
    .header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header h1 {
      color: white;
      font-size: 24px;
    }
    .header .user-info {
      display: flex;
      align-items: center;
      color: white;
    }
    .header .user-info i {
      margin-left: 10px;
    }
    .sidebar {
      background-color: #2C6A6A;
      border-radius: 10px;
      padding: 20px;
      color: white;
    }
    .sidebar h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .sidebar table {
      width: 100%;
      border-collapse: collapse;
    }
    .sidebar table th, .sidebar table td {
      padding: 10px;
      text-align: left;
    }
    .sidebar table th {
      background-color: #3C8A8A;
    }
    .sidebar table tr:nth-child(even) {
      background-color: #3C8A8A;
    }
    .main-content {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .main-content .queue-number, .main-content .patient-data {
      background-color: #2C6A6A;
      border-radius: 10px;
      padding: 20px;
      color: white;
      width: 48%;
    }
    .main-content .queue-number h2, .main-content .patient-data h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .main-content .queue-number .number {
      font-size: 48px;
      margin: 20px 0;
    }
    .main-content .queue-number .doctor {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .main-content .queue-number button, .main-content .patient-data button {
      background-color: #3C8A8A;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
    .main-content .patient-data .info {
      margin-bottom: 10px;
    }
    .main-content .patient-data .info span {
      display: inline-block;
      width: 100px;
    }
    .main-content .patient-data .info input {
      background-color: #3C8A8A;
      border: none;
      padding: 5px;
      border-radius: 5px;
      color: white;
      width: calc(100% - 110px);
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel">
    const App = () => {
      return (
        <div className="p-4">
          <div className="header flex justify-between items-center p-4 bg-teal-700 rounded-lg">
            <h1 className="text-white text-2xl">
              <i className="fas fa-arrow-left"></i> PANGGIL ANTRIAN
            </h1>
            <div className="user-info flex items-center text-white">
              <span>Halo Dewi</span>
              <i className="fas fa-user-circle ml-2"></i>
              <i className="fas fa-sign-out-alt ml-2"></i>
            </div>
          </div>
          <div className="main-content flex justify-between mt-4">
            <div className="sidebar bg-teal-700 rounded-lg p-4 text-white w-1/3">
              <img src="https://placehold.co/100x100" alt="MediLine Logo" className="mb-4" />
              <h2 className="text-lg mb-2">Filter Berdasarkan</h2>
              <div className="mb-4">
                <div><i className="fas fa-circle text-green-500"></i> Dipanggil</div>
                <div><i className="fas fa-circle text-yellow-500"></i> Menunggu</div>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-teal-800 p-2">Nomor Antrian</th>
                    <th className="bg-teal-800 p-2">Nama</th>
                    <th className="bg-teal-800 p-2">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA01</td>
                    <td className="p-2">MAMAY AYU LESTARI</td>
                    <td className="p-2">11/09 - 08:20</td>
                  </tr>
                  <tr>
                    <td className="p-2">A01</td>
                    <td className="p-2">KHOIRIYAH AMNA</td>
                    <td className="p-2">11/09 - 08:40</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">A02</td>
                    <td className="p-2">SALSABILA SHAFIYA</td>
                    <td className="p-2">11/09 - 09:05</td>
                  </tr>
                  <tr>
                    <td className="p-2">A03</td>
                    <td className="p-2">ARESA PUTRI</td>
                    <td className="p-2">11/09 - 09:25</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">A04</td>
                    <td className="p-2">MILA AMELIA</td>
                    <td className="p-2">11/09 - 09:45</td>
                  </tr>
                  <tr>
                    <td className="p-2">A05</td>
                    <td className="p-2">DITA SARI</td>
                    <td className="p-2">11/09 - 10:05</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA06</td>
                    <td className="p-2">AHMAD</td>
                    <td className="p-2">11/09 - 10:25</td>
                  </tr>
                  <tr>
                    <td className="p-2">BA07</td>
                    <td className="p-2">KURNIA</td>
                    <td className="p-2">11/09 - 10:45</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA08</td>
                    <td className="p-2">JULIAN</td>
                    <td className="p-2">11/09 - 11:05</td>
                  </tr>
                  <tr>
                    <td className="p-2">BA09</td>
                    <td className="p-2">IMAM</td>
                    <td className="p-2">11/09 - 11:25</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA10</td>
                    <td className="p-2">ZAKI</td>
                    <td className="p-2">11/09 - 11:45</td>
                  </tr>
                  <tr>
                    <td className="p-2">A11</td>
                    <td className="p-2">RAMA</td>
                    <td className="p-2">11/09 - 12:05</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA12</td>
                    <td className="p-2">BUDI</td>
                    <td className="p-2">11/09 - 12:25</td>
                  </tr>
                  <tr>
                    <td className="p-2">A13</td>
                    <td className="p-2">MUHAMMAD ABI</td>
                    <td className="p-2">11/09 - 12:45</td>
                  </tr>
                  <tr className="bg-teal-800">
                    <td className="p-2">BA14</td>
                    <td className="p-2">NUHAIRAH</td>
                    <td className="p-2">11/09 - 13:05</td>
                  </tr>
                  <tr>
                    <td className="p-2">BA15</td>
                    <td className="p-2">NAYLA</td>
                    <td className="p-2">11/09 - 13:25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="queue-number bg-teal-700 rounded-lg p-4 text-white w-1/3">
              <h2 className="text-lg mb-2">NOMOR ANTRIAN</h2>
              <div className="number text-6xl my-4">BA01</div>
              <div className="doctor text-lg mb-4">
                Dokter
                <br />
                Dr. Maulana Malik
              </div>
              <button className="bg-teal-800 p-2 rounded-lg mr-2">Panggil</button>
              <button className="bg-teal-800 p-2 rounded-lg">Selesai</button>
            </div>
            <div className="patient-data bg-teal-700 rounded-lg p-4 text-white w-1/3">
              <h2 className="text-lg mb-2">DATA PASIEN</h2>
              <div className="info mb-2">
                <span>Jenis :</span>
                <input type="text" value="Pasien BPJS" readOnly className="bg-teal-800 p-2 rounded-lg w-full" />
              </div>
              <div className="info mb-2">
                <span>Nama :</span>
                <input type="text" value="Mamay Ayu Lestari" readOnly className="bg-teal-800 p-2 rounded-lg w-full" />
              </div>
              <div className="info mb-2">
                <span>Dokter :</span>
                <input type="text" value="Dr. Maulana Malik" readOnly className="bg-teal-800 p-2 rounded-lg w-full" />
              </div>
              <div className="info mb-2">
                <span>Klinik :</span>
                <input type="text" value="Poli Umum" readOnly className="bg-teal-800 p-2 rounded-lg w-full" />
              </div>
              <button className="bg-teal-800 p-2 rounded-lg mr-2">Lewati</button>
              <button className="bg-teal-800 p-2 rounded-lg">Panggil Next</button>
            </div>
          </div>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>