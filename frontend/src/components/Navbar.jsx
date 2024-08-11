import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../components/Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.name); // Get the email from the Redux store

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUserIconClick = () => {
    if (email === 'admin@gmail.com') {
      navigate('/dash'); // Navigate to /dash if email is admin@gmail.com
    } else {
      navigate('/user-dash'); // Otherwise, navigate to /user-dash
    }
  };

  return (
    <div className='navbar'>
      <span className='logo'>Quartz</span>

      <ul className='nav-items'>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
        <li onClick={() => scrollToSection('carddd')}>Programs</li>
        <li onClick={() => scrollToSection('subss')}>Subscribe</li>
        <li onClick={() => scrollToSection('footer')}>About us</li>

        {isLoggedIn ? (
          <li className='user-profile' style={{ border: 'none' }}>
            <FaUserCircle size={40} className='user-icon' onClick={handleUserIconClick} /> {/* Use handleUserIconClick to navigate */}
            <span className='log-out' onClick={onLogout}>Logout</span>
          </li>
        ) : (
          <li className='log-in'>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link> {/* Using Link for navigation */}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
