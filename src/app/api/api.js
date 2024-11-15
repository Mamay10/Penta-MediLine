// api/api.js
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
  