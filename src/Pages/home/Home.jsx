import React from "react";
import Layout from "../../layout/Index";
import "./home.css";

export default function index() {
  return (
    <Layout>
      <div className="home-page-cards">
        <div className="home-page-col-one"></div>
        <div className="home-page-col-two"></div>
        <div className="home-page-col-three"></div>
      </div>
    </Layout>
  );
}
