import React, { useEffect, useRef, useState } from "react";
import { useDetectOutsideClick } from "../../hooks/useVisible";
import AVT from "../../images/profile.jpg";
import "./style.scss";
export default function Navbar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleClick = () => { 
    setIsActive(!isActive)
  }
  
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="container-navbar-logo">
          <a href="/">flakes</a>
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
            <div className="navbar-profile">
              <span onClick={handleClick}>Profile</span>
                <div className={isActive ? "navbar-profile-list" : "unactive"} ref={dropdownRef}>
                  <li>
                    <a href="#">Setting</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
