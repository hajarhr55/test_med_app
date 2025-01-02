import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // تأكد من إضافة ملف CSS للتنسيق

// Function component Notification لعرض إشعارات المستخدم
const Notification = ({ children }) => {
  // المتغيرات الحالة لإدارة بيانات المستخدم، وبيانات الطبيب، وبيانات الموعد
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // حالة لإظهار أو إخفاء الإشعار

  // useEffect hook لتنفيذ الآثار الجانبية في المكون
  useEffect(() => {
    // استرجاع البيانات المخزنة مثل اسم المستخدم، بيانات الطبيب، وبيانات الموعد
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // إذا كان يوجد اسم مستخدم مخزن، قم بتحديث الحالة
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // إذا كانت بيانات الطبيب موجودة، قم بتحديث الحالة
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // إذا كانت بيانات الموعد موجودة، قم بتحديث الحالة
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // يعتمد على أول تحميل للمكون

  // دالة لإغلاق الإشعار عند النقر على زر "إغلاق"
  const handleClose = () => {
    setIsVisible(false);
  };

  // إذا كانت حالة الإشعار غير مرئية، إرجاع null (عدم عرض الإشعار)
  if (!isVisible) return null;

  return (
    <div>
      {/* عرض Navbar */}
      <Navbar></Navbar>
      {/* عرض الأطفال */}
      {children}
      
      {/* إذا كان المستخدم مسجلاً الدخول وبيانات الموعد موجودة */}
      {isLoggedIn && appointmentData && (
        <div className="notification-container">
          <div className="appointment-card">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>User:</strong> {username}
            </p>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Date:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              <strong>Time:</strong> {appointmentData?.time}
            </p>
            <button onClick={handleClose} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// تصدير المكون Notification للاستخدام في أماكن أخرى
export default Notification;
