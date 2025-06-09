import React, { useState } from "react";
import arrow from "../../assets/images/back-arrow.svg";
import "./mobilemenu.css";
import { HashLink as Link } from "react-router-hash-link";
import moneylinklogo from "../../assets/images/moneylinklogo.svg";

const Mobilemenu = ({ setOpen, onMenuSelect }) => {
  const [animating, setAnimating] = useState(false);

  const handleArrowClick = (item) => {
    if (animating) return; // Prevent multiple rapid clicks during animation

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }, 500); // Animation duration
  };

  return (
    <div className="mobile-menu">
      <div className="App">
        <div className="sidebar">
          <div className="header">

            <Link to="/" className="navbar-brand">
              <img src={moneylinklogo} className="mobile-logo" alt="Logo" />
            </Link>

            <button className="close-btn" onClick={() => setOpen(false)}>
              <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="mobileheader"></div>
          <div className="section section2">
            <div

            >

              <div>
                <div className="mobileheader1"></div>
                <div
                  className="menu-item"
                  onClick={() => handleArrowClick("platforms")}
                >
                  <ul
                    className="moblielist"
                    onClick={() => handleArrowClick("Platform")}
                  >
                    <Link
                      to="/"
                      className="nav-link main-active"
                    >
                      <li>Card Issuing</li>
                      <img src={arrow} className="arrowimg" alt="arrow" />
                    </Link>
                    <div className="mobileheader"></div>
                    <Link
                      to="/merchant"
                      className="nav-link main-active"
                    >
                      <li>Merchant Services</li>
                      <img src={arrow} className="arrowimg" alt="arrow" />
                    </Link>
                    <div className="mobileheader"></div>
                    <Link
                      to="/Loanmanagement"
                      className="nav-link main-active"
                    >
                      <li>Loan Management System</li>
                      <img src={arrow} className="arrowimg" alt="arrow" />
                    </Link>
                    <div className="mobileheader"></div>
                    <Link
                      to="/Debtcollections"
                      className="nav-link main-active"
                    >
                      <li>Debt Collection</li>
                      <img src={arrow} className="arrowimg" alt="arrow" />
                    </Link>
                    <div className="mobileheader"></div>
                    <Link
                      to="/Accountmanagement"
                      className="nav-link main-active"
                    >
                      <li>Account Management System</li>
                      <img src={arrow} className="arrowimg" alt="arrow" />
                    </Link>
                  </ul>

                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
