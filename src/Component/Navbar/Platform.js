import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Main";
import { NavLink, useLocation } from "react-router-dom";
import moneylinklogo from "../../assets/images/moneylinklogo.svg";

import "./platform.css";

const Solution = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const subLinks = [
      "/Platform/Moneylink/Loanmanagement",
      "/Platform/Moneylink/Debtcollections",
    ];
    if (subLinks.includes(location.pathname)) {
    } else {
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
