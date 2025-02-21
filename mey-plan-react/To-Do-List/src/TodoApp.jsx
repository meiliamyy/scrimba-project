import { useState } from "react";

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
    <div>
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleTaskCompletion(t.id)} style={{ cursor: "pointer" }}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
