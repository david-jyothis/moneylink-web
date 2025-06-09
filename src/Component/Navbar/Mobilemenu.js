import React, { useState } from "react";
import arrow from "../../assets/images/back-arrow.svg";
import icon1 from "../../assets/images/responsive1.svg";
import icon2 from "../../assets/images/responsive2.svg";
import icon3 from "../../assets/images/responsive3.svg";
import icon4 from "../../assets/images/responsive4.svg";
import icon5 from "../../assets/images/responsive5.svg";
import icon6 from "../../assets/images/responsive6.svg";
import logo from "../../assets/images/montralogo.svg";
import "./mobilemenu.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import moneylinklogo from "../../assets/images/moneylinklogo.svg";

const Mobilemenu = ({ setOpen, onMenuSelect }) => {
  const [showNewUI, setShowNewUI] = useState(false);
  const [showDuoUI, setShowDuoUI] = useState(false);
  const [showPlatformUI, setShowPlatformUI] = useState(false);
  const [showCompanyUI, setShowCompanyUI] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleArrowClick = (item) => {
    if (animating) return; // Prevent multiple rapid clicks during animation

    setAnimating(true);

    if (item === "Global Payments") {
      setShowNewUI(true);
      setShowDuoUI(false);
      setShowPlatformUI(false);
      setShowCompanyUI(false);
    } else if (item === "Banking-as-a-Service") {
      setShowNewUI(false);
      setShowDuoUI(true);
      setShowPlatformUI(false);
      setShowCompanyUI(false);
    } else if (item === "platforms") {
      setShowNewUI(false);
      setShowDuoUI(false);
      setShowPlatformUI(true);
      setShowCompanyUI(false);
    } else if (item === "company") {
      setShowNewUI(false);
      setShowDuoUI(false);
      setShowPlatformUI(false);
      setShowCompanyUI(true);
    }
    setAnimationDirection("right");
    setTimeout(() => {
      setActiveItem(item);
      setAnimating(false);
    }, 500); // Animation duration
  };

  const handleBackClick = () => {
    if (animating) return; // Prevent multiple rapid clicks during animation

    setAnimating(true);
    setShowNewUI(false);
    setShowDuoUI(false);
    setShowPlatformUI(false);
    setShowCompanyUI(false);
    setAnimationDirection("left");
    setTimeout(() => {
      setActiveItem(null);
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
