import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar'; // Importing Navbar
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import DoctorCard from './Components/DoctorCard/DoctorCard'; // التأكد من المسار

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Add Navbar to appear on all pages */}
        <Navbar />
        <Routes>
          {/* Define the route for the Landing Page */}
          <Route path="/" element={<Landing_Page />} />
          {/* Add routes for Sign Up and Login pages */}
          <Route path="/signup" element={<div>Sign Up Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          {/* Route for Instant Consultation */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
