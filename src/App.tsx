import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Details } from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
