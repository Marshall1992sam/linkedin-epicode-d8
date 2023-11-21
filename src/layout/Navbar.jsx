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
                  icon={faTimes}
                  className="close-icon"
                  onClick={() => setIsOpen(false)}
                />
                <h1 style={{ color: "black", fontSize: "30px" }}>
                  Per le aziende
                </h1>
                <div className="first-block">
                  <h1>Scopri altri prodotti LinkedIn</h1>
                  <div className="linea"></div>
                  <div className="container-icon-link">
                    <div className="icone-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                      </svg>
                      <span>Ricercami</span>
                    </div>
                    <div className="icone-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2Zm1 2a1 1 0 0 0-2 0h2Zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11H5Z" />
                        <path d="M14 7.599A2.986 2.986 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A2.986 2.986 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.599ZM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z" />
                      </svg>
                      <span>Guadagni</span>
                    </div>
                    <div className="icone-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                      </svg>
                      <span>Watch</span>
                    </div>
                    <div className="icone-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <span>Risparmia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
