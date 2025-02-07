import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/tasks`;

// Obtener tareas del usuario
export const getTasks = async (token) => {
    return await axios.get(API_URL, { headers: { Authorization: token } });
};

// Crear una nueva tarea
export const createTask = async (token, title) => {
    return await axios.post(API_URL, { title }, { headers: { Authorization: token } });
};

// Actualizar una tarea
export const updateTask = async (token, id, task) => {
    return await axios.put(`${API_URL}/${id}`, task, { headers: { Authorization: token } });
};

// Eliminar una tarea
export const deleteTask = async (token, id) => {
    return await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: token } });
};
