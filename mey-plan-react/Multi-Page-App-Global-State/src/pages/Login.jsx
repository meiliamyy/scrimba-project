import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(GlobalContext);

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}

export default Login;
