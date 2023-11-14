import React from "react";
import "./index.css";
import NavBar from "./Navbar";

export default function Index() {
  return (
    <div> 
      <NavBar/>
      <div className="main">
        <div className="main-wrap"></div>
      </div>
    </div>
  );
}
