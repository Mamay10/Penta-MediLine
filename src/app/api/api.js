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
export const fetchDokters = async () => {
  const response = await fetch("http://localhost:5000/api/dokters");
  return response.json();
};

export const addDokter = async (userData) => {
  await fetch("http://localhost:5000/api/dokters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const fetchDokterById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/dokters/${id}`);
  return response.json();
};

export const updateDokter = async (id, updatedData) => {
  await fetch(`http://localhost:5000/api/dokters/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
};

export const deleteDokterr = async (id) => {
  await fetch(`http://localhost:5000/api/dokters/${id}`, { method: "DELETE" });
};
