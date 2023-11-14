import React from "react";
import Logo from "./Logo.png";
import Pippo from "./pippo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faCircleUser, faMessage} from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logoContainer" >
           <img src={Logo} alt="logo" style={{width:"40px"}}/>
          </div>

          <div className="appSearchNavbar">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
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
          
        </div>
      </div>
    </div>
  );
}
