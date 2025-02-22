import { GlobalProvider } from "./context/GlobalContext";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>
  );
}

export default App;
