import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Entrance from "./pages/Entrance";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entrance" element={<Entrance />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
