import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{
        minHeight: "50px", // Reduced height
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? "1" : "0",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">
          CrowdFunding
        </Link>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                <i className="bi bi-bell fs-5"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light me-2 fw-bold" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary fw-bold" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
