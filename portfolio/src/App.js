import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import Home from "../src/Components/Home";

function App() {
  return (
    <Routes>
<Route exact path={"/"} element={<Home />} />
<Route exact path={"/"} element={<NavBar />} />

</Routes>

  
  );
}

export default App;
