import { useState } from "react";
import "./App.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Fungsi untuk menambahkan tugas baru
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Fungsi untuk menghapus tugas berdasarkan id
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Fungsi untuk menandai tugas selesai
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <>
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <div>
        {tasks.map((t) => (
          <div className="styleTask" key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => toggleTaskCompletion(t.id)} />
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</span>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default TodoApp;
