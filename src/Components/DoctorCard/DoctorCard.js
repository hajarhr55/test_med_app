import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm.js';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-details">
          <h3>{doctor.name}</h3>
          <p><strong>Specialty:</strong> {doctor.specialty}</p>
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Phone Number:</strong> {doctor.phone}</p>
          <p><strong>Ratings:</strong> {doctor.rating} ⭐</p>
        </div>
      </div>
      <button className="book-appointment-btn" onClick={toggleForm}>
        Book Now
      </button>
      {showForm && <AppointmentForm doctorName={doctor.name} />}
    </div>
  );
};

export default DoctorCard;
