import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
