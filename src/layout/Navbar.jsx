import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Pippo from "./Pippo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserFriends,
  faBriefcase,
  faCommentDots,
  faBell,
  faCircleUser,
  faMessage,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logoContainer">
            <img src={Logo} alt="logo" style={{ width: "40px" }} />
          </div>

          <div className="appSearchNavbar">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="navbarContentColTwo">
          <div className="home">
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </div>
          <div className="net">
            <FontAwesomeIcon icon={faUserFriends} />
            <p>Rete</p>
          </div>
          <div className="work">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Lavoro</p>
          </div>
          <div className="message">
            <FontAwesomeIcon icon={faMessage} />
            <p>Messaggistica</p>
          </div>
          <div className="notify">
            <FontAwesomeIcon icon={faBell} />
            <p>Notifica</p>
          </div>
          <div className="userimg">
            <img src={Pippo} alt="" />
          </div>
          <div className="grid-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="grid-icon"
              viewBox="0 0 16 16"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
            <p className="p-grid">
              Per le aziende
              <span style={{ marginLeft: "5px", fontSize: "10px" }}>
                {isOpen ? "▲" : "▼"}
              </span>
            </p>
          </div>
          {isOpen && (
            <div className="menu-overlay" onClick={() => setIsOpen(false)}>
              <div className="menu-content">
                <FontAwesomeIcon
                  icon={faTimes} // Assicurati che faTimes sia importato correttamente
                  className="close-icon"
                  onClick={() => setIsOpen(false)}
                />
                <h1 style={{color:"black",fontSize:"30px"}}>Per le aziende</h1>
                <div className="first-block">
                <h1 style={{fontSize:"16px"}}>Scopri altri prodotti LinkedIn</h1>
                </div>
                <h1>ciao</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
