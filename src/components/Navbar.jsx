import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Lista de Tareas
      </h1>
      {/* Botones grandes para pantallas medianas y grandes */}
      <div className="hidden md:flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          onClick={() => navigate("/tasks")}
        >
          Mis Tareas
        </button>
        <button
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
      {/* Botón de menú para pantallas pequeñas */}
      <button
        className="md:hidden px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      {/* Menú desplegable en pantallas pequeñas */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-gray-700 rounded shadow-md flex flex-col gap-2 p-4 md:hidden">
          <button
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            onClick={() => {
              navigate("/tasks");
              setMenuOpen(false);
            }}
          >
            Mis Tareas
          </button>
          <button
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
