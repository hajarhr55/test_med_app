import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();  // استخدام navigate

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setEmail('');
        window.location.reload();
    };

    const goToInstantConsultation = () => {
      navigate('/instant-consultation');  // الانتقال إلى صفحة الاستشارة الفورية
    };

    useEffect(() => { 
        const storedemail = sessionStorage.getItem("email");
        if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/search/doctors">Appointments</Link></li>
                <li className="link"><Link to="/healthblog">Health Blog</Link></li>
                <li className="link"><Link to="/reviews">Reviews</Link></li>

                <li className="link">
                    <button className="btn1" onClick={goToInstantConsultation}>Instant Consultation</button>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup"><button className="btn1">Sign Up</button></Link>
                        </li>
                        <li className="link">
                            <Link to="/login"><button className="btn1">Login</button></Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
