import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Main";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import moneylinklogo from "../../assets/images/moneylinklogo.svg";

import "./platform.css";

const Solution = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isMoreActive, setMoreActive] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [disableLink, setDisableLink] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const timeoutIdRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 920) {
        setSubMenuVisible(false);
        setMoreActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
    setMoreActive(!isSubMenuVisible);
  };

  const handleSubMenuClick = (e) => {
    e.stopPropagation();
    setMoreActive(true);
    setSubMenuVisible(false);
  };

  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      setSubMenuVisible(false);
      // setMoreActive(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutIdRef.current);
    setSubMenuVisible(true);
  };

  const handleSubLinkActivation = (link) => {
    setMoreActive(true);
    setActiveLink(link);
    setDisableLink(true);
  };

  const handleLinkClick = () => {
    setMoreActive(false);
  };

  useEffect(() => {
    const subLinks = [
      "/Platform/Moneylink/Loanmanagement",
      "/Platform/Moneylink/Debtcollections",
    ];
    if (subLinks.includes(location.pathname)) {
      setMoreActive(true);
      setDisableLink(true);
    } else {
      setMoreActive(false);
      setDisableLink(false);
    }
  }, [location.pathname]);

  return (
    <>
      {screenWidth > 920 ? (
        <div className="second-navbar navbar platform-navbar">
          <div className="solutions-logo">
            <img src={moneylinklogo} alt="moneylinklogo" className="moneylinklogonav" />
          </div>

          <div className="nav-link plat-nav-link">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link platform"
                  activeClassName="plat-active"
                >
                  Card Issuing & Processing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/merchant"
                  className="nav-link platform"
                  activeClassName="plat-active"
                >
                  Merchant Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Accountmanagement"
                  className="nav-link platform"
                  activeClassName="plat-active"
                >
                  Account Management System
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Loanmanagement"
                  className="nav-link platform"
                  activeClassName="plat-active"
                >
                  Loan Management System
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Debtcollections"
                  className="nav-link platform"
                  activeClassName="plat-active"
                >
                  Debt Collection
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default Solution;
