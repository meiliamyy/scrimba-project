import React, { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Switch to {darkMode ? "Light" : "Dark"} Mode</button>
    </div>
  );
};

export default ThemeToggle;
