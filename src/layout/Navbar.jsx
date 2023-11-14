import React from "react";
import Logo from '../assets/Logo.png';
import Pippo from "../assets/pippo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from '../layout/Dropdown'

import { faSearch,faHome, faUserFriends, faBriefcase,  faBell,  faMessage , faDot} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logoContainer" >
           <img src={Logo} alt="logo" style={{width:"50px"}}/>
          </div>

          <div className="appSearchNavbar">
            <FontAwesomeIcon icon={faSearch} className="search" />
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="navbarContentColTwo">
          <div className="home"> 
          <FontAwesomeIcon icon={faHome}/>
          <p>Home</p>
          </div>
         <div className="net">
          <FontAwesomeIcon icon={faUserFriends}/>
          <p>Rete</p>
         </div>
          <div className="work">
          <FontAwesomeIcon icon={faBriefcase}/>
          <p>Lavoro</p>
          </div>
          <div className="message">
          <FontAwesomeIcon icon={faMessage}/>
          <p>Messaggistica</p>
          </div>
          <div className="notify">
          <FontAwesomeIcon icon={faBell}/>
          <p>Notifica</p>
          </div>
          <div className="userimg">
            <img src={Pippo} alt="" />
          </div>
          <ion-icon name="apps-outline" ></ion-icon>
          <Dropdown/>
        </div>
      </div>
    </div>
  );
}
