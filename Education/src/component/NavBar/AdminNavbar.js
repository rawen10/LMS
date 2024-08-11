import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNavbar.css';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed
import { FiMenu, FiHome, FiUser, FiClipboard, FiHelpCircle, FiSearch, FiLogOut, FiUsers } from 'react-icons/fi'; // Import icons from react-icons
import facebookLogo from '../../assets/fb.png';
import instagramLogo from '../../assets/ig.png';
import tiktokLogo from '../../assets/tiktok.png';

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const adminName = "وليد بوحوش";

  return (
    <div className="navbar-container">
      <header className="admin-header">
        <div className="right-section">
          <div className="menu-icon" onClick={toggleSidebar}>
            <FiMenu size={30} />
          </div>
          <div className="logo">
            <img src={logo} alt="Admin Logo" />
          </div>
        </div>
        <div className="search-bar">
          <FiSearch size={20} />
          <input type="text" placeholder="بحث..." />
        </div>
        <div className="admin-info">
          <span className="admin-name">{adminName}</span>
        </div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav className="sidebar-links">
          <Link
            to="/admindashboard"
            className={location.pathname === '/admindashboard' ? 'active' : ''}
          >
            <FiHome size={20} /><span>الإستقبال</span>
          </Link>
          <Link
            to="/adminprofile"
            className={location.pathname === '/adminprofile' ? 'active' : ''}
          >
            <FiUser size={20} /><span>ملفي الشخصي</span>
          </Link>
          <Link
            to="/adminsubjects"
            className={location.pathname === '/adminsubjects' ? 'active' : ''}
          >
            <FiClipboard size={20} /><span>المواد</span>
          </Link>
          <Link
            to="/adminusers"
            className={location.pathname === '/adminusers' ? 'active' : ''}
          >
            <FiUsers size={20} /><span>إدارة المستخدمين</span>
          </Link>
          <Link
            to="/adminhelp"
            className={location.pathname === '/adminhelp' ? 'active' : ''}
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

export default AdminNavbar;
