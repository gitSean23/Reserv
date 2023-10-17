import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import OrgHomePage from './pages/OrgHomePage';
import OrgSearchPage from './pages/OrgSearchPage';
import OrgReservationsPage from './pages/OrgReservationsPage';
import OrgProfilePage from './pages/OrgProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/CreateAccount" element={<SignUpPage />} />
        <Route path="/OrgHomePage" element={<OrgHomePage/>}/>
        <Route path="/OrgSearchPage" element={<OrgSearchPage/>}/>
        <Route path="/OrgReservationsPage" element={<OrgReservationsPage/>}/>
        <Route path="/OrgProfilePage" element={<OrgProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
