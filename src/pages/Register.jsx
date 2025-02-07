import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      alert("Usuario registrado. Ahora inicia sesión.");
      navigate("/login");
    } catch (error) {
      alert("Error al registrar usuario.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <button type="submit" className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700">
            Registrarse
          </button>
        </form>
        <p className="text-white text-center mt-4">
          ¿Ya tienes cuenta? <a href="/login" className="text-blue-400">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
