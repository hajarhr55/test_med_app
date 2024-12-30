import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* تعريف المسار الرئيسي لعرض صفحة Landing_Page */}
          <Route path="/" element={<Landing_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
