import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes></Routes>
    </div>
  );
}
