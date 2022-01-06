import React from "react";
import AVT from '../../images/profile.jpg'
import './style.css'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="container-navbar-logo">
          <h1>flakes</h1>
        </div>
        <div className="container-navbar-link">
          <div className="container-navbar-link-links">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Series</a>
            <a href="#">Popular</a>
            <a href="#">Trends</a>
          </div>
        </div>
        <div className="container-navbar-user">
          <div className="container-navbar-user-info">
            <img width={60} src={AVT} alt="avt" />
            <div>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  