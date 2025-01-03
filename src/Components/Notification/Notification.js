import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // استيراد ملف الـ CSS

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <div className="notification">
          <div className="notification__container">
            <h3>Appointment Details</h3>
            <p><strong>Patient:</strong> {username}</p>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Specialty:</strong> {doctorData?.specialty}</p>
            <p><strong>Appointment Date:</strong> {appointmentData?.date}</p>
            <p><strong>Appointment Time:</strong> {appointmentData?.time}</p>
            <button className="notification__cancel-button" onClick={() => setAppointmentData(null)}>Cancel Appointment</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
