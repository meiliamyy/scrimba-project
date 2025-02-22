import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser(name);
  const logout = () => setUser(null);

  return <GlobalContext.Provider value={{ user, login, logout }}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };
