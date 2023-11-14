import React from "react";
import Logo from "./Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logoContainer" >
           <img src={Logo} alt="logo" style={{width:"50px"}}/>
          </div>

          <div className="appSearchNavbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="navbarContentColTwo">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
