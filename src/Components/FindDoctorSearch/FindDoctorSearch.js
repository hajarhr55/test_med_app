import React, { useState } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
  const [specialty, setSpecialty] = useState('');
  const [doctorList, setDoctorList] = useState([
    'Cardiologist', 'Dermatologist', 'Neurologist', 'Orthopedic', 'Pediatrician'
  ]);
  const [showList, setShowList] = useState(false);

  const handleFocus = () => {
    setShowList(true);
  };

  const handleBlur = () => {
    setShowList(false);
  };

  const handleChange = (event) => {
    setSpecialty(event.target.value);
  };

  return (
    <div className="doctor-search-container">
      <input
        type="text"
        value={specialty}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter doctor's specialty"
        className="search-input"
      />
      {showList && specialty && (
        <ul className="specialty-list">
          {doctorList
            .filter((doctor) => doctor.toLowerCase().includes(specialty.toLowerCase()))
            .map((doctor, index) => (
              <li key={index}>{doctor}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;
