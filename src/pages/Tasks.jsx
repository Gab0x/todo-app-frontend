import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, createTask, updateTask, deleteTask } from "../services/taskService";
import Navbar from "../components/Navbar";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks(token);
      setTasks(response.data);
    } catch (error) {
      alert("Error al cargar tareas");
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask(token, title);
    setTitle("");
    loadTasks();
  };

  const handleUpdateTask = async (id, completed) => {
    await updateTask(token, id, { completed: !completed });
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(token, id);
    loadTasks();
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
        <h2 className="text-3xl font-bold mb-6">Lista de Tareas</h2>
        <form
          onSubmit={handleCreateTask}
          className="mb-6 flex flex-col md:flex-row gap-4 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Nueva tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Agregar
          </button>
        </form>
        <ul className="w-full max-w-md space-y-4">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center p-4 bg-gray-800 rounded shadow"
            >
              <span
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() => handleUpdateTask(task._id, task.completed)}
              >
                {task.title}
              </span>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="text-red-500 hover:text-red-600"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
