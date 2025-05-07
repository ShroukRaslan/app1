import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './SideBar.css';
import shroukImg from '../../assets/shrouk.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
     
      <div className="mobile-toggle d-md-none" onClick={toggleSidebar}>
        ☰
      </div>

      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="bg-light d-flex flex-column align-items-center justify-content-center text-center">
          <img
            src={shroukImg} alt="shrouk"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h5 className="fw-bold mb-1">Shrouk Raslan</h5>
          <p className="text-primary small mb-0">Front End Developer</p>
          <div className="nav flex-column mt-4">
            <Link className="nav-link text-dark small" to="/" onClick={closeSidebar}>HOME</Link>
            <Link className="nav-link text-dark small" to="/About" onClick={closeSidebar}>ABOUT</Link>
            <Link className="nav-link text-dark small" to="/Skills" onClick={closeSidebar}>SKILLS</Link>
            <Link className="nav-link text-dark small" to="/Experience" onClick={closeSidebar}>EXPERIENCE</Link>
            <Link className="nav-link text-dark small" to="/Work" onClick={closeSidebar}>WORK</Link>
          </div>
        </div>
      </div>

    
      
    </>
  );
};

export default Sidebar;
