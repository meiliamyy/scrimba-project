import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); //untuk input task
  const [tasks, setTasks] = useState([]); // ngumpulin task dalam array kosong

  const addTask = () => {
    if (task.trim() === "") return; // cek apakah input kosong
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id}: {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
