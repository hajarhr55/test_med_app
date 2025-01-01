import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar'; // Importing Navbar
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import DoctorCard from './Components/DoctorCard/DoctorCard'; // التأكد من المسار
import SignUp from './Components/Sign_Up/Sign_Up'; 
import Login from './Components/Login/Login'; // استيراد مكون تسجيل الدخول

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Add Navbar to appear on all pages */}
        <Navbar />
        <Routes>
          {/* Define the route for the Landing Page */}
          <Route path="/" element={<Landing_Page />} /> {/* تعديل المسار */}
          {/* Add routes for Sign Up and Login pages */}
          <Route path="/signup" element={<SignUp />} /> {/* استبدال div بمكون SignUp */}
          <Route path="/login" element={<Login />} /> {/* استبدال div بمكون Login */}
          {/* Route for Instant Consultation */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
