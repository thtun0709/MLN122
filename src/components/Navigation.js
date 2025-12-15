import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Michael Todaro</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Tổng quan
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('definition')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Đặt vấn đề
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('comparison')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                So sánh
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('analysis')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Phân tích
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('financial')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Tài chính
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('export')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Xuất khẩu
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('market')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Thị trường
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('state')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Độc quyền nhà nước
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('limits')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Giới hạn
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ai-usage">AI Usage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
