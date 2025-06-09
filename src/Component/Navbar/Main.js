import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import moneylinklogo from "../../assets/images/moneylinklogo.svg";
// import nigeria from "../../assets/images/nigeria.svg";
import duologo2 from "../../assets/images/duologo2.svg";
import veryfilogo from "../../assets/images/veryfilogo.svg";
import montra from "../../assets/images/montra.svg";
import Mobilemenu from "./Mobilemenu";
// import Productnav from "./Productnav";
import "./main.css";

const Main = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutIdRef = useRef(null);
  const location = useLocation();

  const handleButtonClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const handleSubMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      setSubMenuVisible(false);
    }, 1000);
  };
  useEffect(() => {
    setSubMenuVisible(false);
  }, [location]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutIdRef.current);
    setSubMenuVisible(true);
  };

  useEffect(() => {
    setSubMenuVisible(window.innerWidth <= 768);
    if (window.innerWidth > 920) {
      setSubMenuVisible(false);
    }
  }, [setSubMenuVisible]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSubLinkActivation = (link) => {
  };

  useEffect(() => {
    const subLinks = [
      "/Solutions/Duo/overview",
      "/Solution/Verified/Authapp",
      "/Solutions/Supplychain/overview",
    ];
    if (subLinks.includes(location.pathname)) {
    } else {
    }
  }, [location.pathname]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-section1">
          <div className="logo">
            <Link to="/" className="navbar-brand">
              <img src={moneylinklogo} alt="logo" className="mainlogo" />
            </Link>
          </div>
          <div className="nav-link">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  smooth
                  to="/Products/overview"
                  className="nav-link main-active solutions-nav-link"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="solution-btn solutions-nav-link "
                  onClick={handleButtonClick}
                  aria-current="false"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  activeClassName="active"
                  end
                >
                  Solutions
                </button>

                {isSubMenuVisible && (
                  <div
                    className="submenu"
                    onClick={handleSubMenuClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="solution-menu-menu">
                      <NavLink
                        to="/Solutions/Duo/overview"
                        className="nav-link"
                        activeClassName="active"
                        onClick={() =>
                          handleSubLinkActivation("/Solutions/Duo/overview")
                        }
                      >
                        <div className="solution-menu">
                          <div>
                            <img
                              src={duologo2}
                              alt="duologo2"
                              className="duologo"
                            />
                          </div>
                          <div>
                            <h6>DUO Card</h6>
                            <p className="solnav">
                              DUO experience offering usage of both Credit &
                              Debit cards in a single card
                            </p>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink
                        to="/Solution/Verified/Authapp"
                        className="nav-link"
                        activeClassName="active"
                        onClick={() =>
                          handleSubLinkActivation("/Solution/Verified/Authapp")
                        }
                      >
                        <div className="solution-menu">
                          <div>
                            <img
                              src={veryfilogo}
                              alt="veryfilogo"
                              className="verified-logo"
                            />
                          </div>
                          <div>
                            <h6>Verifyed</h6>
                            <p className="solnav">
                              Authenticator App from VERIFYED is the simplest &
                              most effective way to verify the user's identity
                            </p>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink
                        to="/Solutions/Supplychain/overview"
                        className="nav-link"
                        activeClassName="active"
                        onClick={() =>
                          handleSubLinkActivation(
                            "/Solutions/Supplychain/overview"
                          )
                        }
                      >
                        <div className="solution-menu">
                          <div>
                            <img src={montra} alt="montra" />
                          </div>
                          <div>
                            <h6>Montra Supply Chain</h6>
                            <p className="solnav">
                              B2B payments & Supply Chain solution for
                              Distribution Companies
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    {/* Add more submenu items as needed */}
                  </div>
                )}
              </li>
              <li className="nav-item">
                <Link
                  to="/Platform/Moneylink/cip"
                  className="nav-link solutions-nav-link"
                >
                  Platform
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-section2">
          {/* <button className="country-button">
            <img src={nigeria} alt="image" />
            <div className="country-name"> Nigeria</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="country-dropdown-icon"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#223872"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button> */}
          <div className="nav-link">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  smooth
                  to="/Company/Overview"
                  className="nav-link solutions-nav-link"
                >
                  Company
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-link solutions-nav-link">
                  Resources
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/" className="nav-link solutions-nav-link">
                  Help
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && <Mobilemenu setOpen={setIsMenuOpen} />}

      {selectedMenu && selectedMenu === "Payments" && (
        <p>gxysagy</p>
      )}
    </>
  );
};

export default Main;
