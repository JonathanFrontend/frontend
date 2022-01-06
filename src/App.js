import './App.css';
import React, { useEffect, useState } from "react";
import TheLibrary from './TheLibrary';
import Categories from './Categories';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact="true" element={<TheLibrary />}>
          </Route>
          <Route path="/categories" element={<Categories />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
