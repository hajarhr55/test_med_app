import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, selectedSlot, selectedDate });
        setName('');
        setPhoneNumber('');
        setSelectedSlot('');
        setSelectedDate('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h3>Book Appointment with {doctorName}</h3>
            <p>Specialty: {doctorSpeciality}</p>
            
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            {/* Dropdown for selecting time slot */}
            <div className="form-group">
                <label htmlFor="timeSlot">Select Time Slot:</label>
                <select
                    id="timeSlot"
                    value={selectedSlot}
                    onChange={(e) => handleSlotSelection(e.target.value)}
                    required
                >
                    <option value="">--Select a Slot--</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                </select>
            </div>

            {/* Input for selecting the appointment date */}
            <div className="form-group">
                <label htmlFor="appointmentDate">Select Appointment Date:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                />
            </div>

            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentFormIC;
