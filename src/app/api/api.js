// api/api.json
//users
export const fetchUsers = async () => {
  const response = await fetch("http://localhost:5000/api/users");
  return response.json();
};

export const addUser = async (userData) => {
  await fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const fetchUserById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/users/${id}`);
  return response.json();
};

export const updateUser = async (id, updatedData) => {
  await fetch(`http://localhost:5000/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
};

export const deleteUser = async (id) => {
  await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
};

//dokters
// fetch semua dokter
export const fetchDokters = async () => {
  const response = await fetch("http://localhost:5000/api/dokters");
  return response.json();
};

// tambah dokter baru
export const addDokter = async (dokterData) => {
  await fetch("http://localhost:5000/api/dokters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dokterData),
  });
};

// update dokter
export const updateDokter = async (id, updatedData) => {
  await fetch(`http://localhost:5000/api/dokters/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
};

// hapus dokter
export const deleteDokter = async (id) => {
  await fetch(`http://localhost:5000/api/dokters/${id}`, { method: "DELETE" });
};

//poli

// fetch semua poli
export const fetchPolis = async () => {
  const response = await fetch("http://localhost:5000/api/polis");
  return response.json();
};

// tambah poli baru
export const addPoli = async (poliData) => {
  await fetch("http://localhost:5000/api/polis", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(poliData),
  });
};

// update poli
export const updatePoli = async (id, updatedData) => {
  await fetch(`http://localhost:5000/api/polis/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
};

// hapus poli
export const deletePoli = async (id) => {
  await fetch(`http://localhost:5000/api/polis/${id}`, { method: "DELETE" });
};
