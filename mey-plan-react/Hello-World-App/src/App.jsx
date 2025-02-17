import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  //state untuk menyimpan user
  const [users, setUsers] = useState([]);

  //state untuk input form
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //function utk menambahkan user ke daftar
  const addUser = () => {
    if (name.trim() === "" || age.trim() === "" || isNaN(age)) {
      alert("nama tidak boleh kosong dan umur harus angka");
      return;
    }

    //tambahkan user baru ke state
    setUsers([...users, { name, age: Number(age) }]);
    setName(""); //reset input
    setAge("");
  };

  return (
    <div>
      <h2>Tambah pengguna</h2>
      <input type="text" placeholder="add name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="add age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={addUser}>add user</button>

      <h2>daftar pengguna</h2>
      {users.length > 0 ? users.map((user, index) => <Greeting key={index} name={user.name} age={user.age} />) : <h3>Tidak ada pengguna untuk ditampilkan.</h3>}
    </div>
  );
}

export default App;
