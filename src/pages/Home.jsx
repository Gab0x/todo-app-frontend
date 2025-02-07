import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la Lista de Tareas ✅</h1>
      <p className="text-gray-400 mb-6">Organiza tus tareas y mejora tu productividad.</p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Home;
