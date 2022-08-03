import React from 'react';
import './App.css';
import NavBar from './Components/Nav/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import All from './pages/All'
import Business from './pages/Bussiness'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Science from './pages/Science'
import Sports from './pages/Sports'
import Technology from './pages/Technology'


function App() {
  return (
    <BrowserRouter>
    <NavBar>
      <a>hello</a>
    </NavBar>
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/business" element={<Business/>} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/health" element={<Health />} />
      <Route path="/science" element={<Science />} />
      <Route path="/sports" element={<Sports/>} />
      <Route path="/technology" element={<Technology />} />
      <Route path="*" element={<Technology />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
