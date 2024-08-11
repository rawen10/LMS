import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './studentNavbar.css';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed
import { FiMenu, FiHome, FiUser, FiBook, FiHelpCircle, FiSearch, FiLogOut, FiClipboard } from 'react-icons/fi'; // Import icons from react-icons
import facebookLogo from '../../assets/fb.png';
import instagramLogo from '../../assets/ig.png';
import tiktokLogo from '../../assets/tiktok.png';

const StudentNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const userName = "فراس";
  const userSurname = "مزوغي";
  const userClass = "الخامسة ابتدائي";

  return (
    <div className="navbar-container">
      <header className="student-header">
        <div className="right-section">
          <div className="menu-icon" onClick={toggleSidebar}>
            <FiMenu size={30} />
          </div>
          <div className="logo">
            <img src={logo} alt="WalidAcademy Logo" />
          </div>
        </div>
        <div className="search-bar">
          <FiSearch size={20} />
          <input type="text" placeholder="بحث..." />
        </div>
        <div className="user-info">
          <span className="user-name">{`${userName} ${userSurname}`}</span>
          <span className="user-class">{userClass}</span>
        </div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ backgroundColor: '#FFBE00' }}>
        <nav className="sidebar-links">
          <Link
            to="/dashboardstudent"
            className={location.pathname === '/dashboardstudent' ? 'active' : ''}
          >
            <FiHome size={20} /><span>الإستقبال</span>
          </Link>
          <Link
            to="/profile"
            className={location.pathname === '/profile' ? 'active' : ''}
          >
            <FiUser size={20} /><span>ملفي الشخصي</span>
          </Link>
          <Link
            to="/offers"
            className={location.pathname === '/offers' ? 'active' : ''}
          >
            <FiBook size={20} /><span>العروض</span>
          </Link>
          <Link
            to="/subjects"
            className={location.pathname === '/subjects' ? 'active' : ''}
          >
            <FiClipboard size={20} /><span>المواد</span>
          </Link>
          <Link
            to="/help"
            className={location.pathname === '/help' ? 'active' : ''}
          >
            <FiHelpCircle size={20} /><span>مساعدة</span>
          </Link>
          <Link
            to="/login"
            className={location.pathname === '/logout' ? 'active' : ''}
          >
            <FiLogOut size={20} /><span>تسجيل الخروج</span>
          </Link>
        </nav>
        <div className="social-media-section">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktokLogo} alt="TikTok" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
