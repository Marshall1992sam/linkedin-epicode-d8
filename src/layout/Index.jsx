import React from "react";
import Navbar from "../layout/Navbar";
import "./index.css";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-wrap"></div>
      </div>
    </div>
  );
}
