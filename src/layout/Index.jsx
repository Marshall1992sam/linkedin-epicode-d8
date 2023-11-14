import React from "react";
import Navbar from "../layout/Navbar";
// import Home from "../layout/Home"
import "../style/index.css";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-wrap">
          <div className="home-page-cards">
            <div className="home-page-col-one"></div>
            <div className="home-page-col-two"></div>
            <div className="home-page-col-three"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
