import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';
import img from './images/st.png';


function App() {
    return (
        <nav className='nav'>
            <div>
                <h1>
                    NetLibrary
                </h1>
                <p>from</p>
                <img src={img} alt='storytel logo' className='logo' />
            </div>
            <div>
                <NavLink to="/" exact="true">Library</NavLink>
                <NavLink to="/categories">Categories</NavLink>
            </div>
        </nav>
    );
}

export default App;
