import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { user, logout } = useContext(GlobalContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please login</span>
      )}
    </nav>
  );
}

export default Navbar;
