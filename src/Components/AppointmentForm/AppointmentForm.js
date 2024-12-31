import React, { useState } from 'react';
import './AppointmentForm.css'; // إذا كنت تستخدم ملف CSS

const AppointmentForm = ({ doctorName }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Dr. ${doctorName} on ${formData.appointmentDate} at ${formData.appointmentTime}`);
  };

  return (
    <div className="appointment-form">
      <h3>Book an Appointment with Dr. {doctorName}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Patient's Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
