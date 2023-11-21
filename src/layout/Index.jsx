import React from "react";
import NavBar from "./Navbar";
import "../style/home.css";
import "../style/Modal.css";
import Copertina from "../assets/disney.jpg";
import Pippo from "../assets/pippo.jpg";
import Modal from "../layout/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Index() {
  const [showModal, setShowModal] = useState();

  // const openModalHandler = () => {
  //   setShowModal(true);
  //   console.log("Modal aperto!");
  // };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="main-wrap">
          <div className="home-page-cards ">
            <div className="home-page-col-one">
              <div className="copertin-img">
                <img src={Copertina} alt="" />
              </div>
              <div className="profile-user">
                <img src={Pippo} alt="" />
              </div>
              <div className="user-name">
                <h2>Pippo de' Pippis. </h2>
                <p>Topolinia </p>
                <div className="buttons">
                  <div className="lookingfor">
                    <button className="looking">Disponibile per</button>
                  </div>
                  <div className="section-btn">
                    <button className="section-1">
                      Aggiungi sezione del profilo
                    </button>
                  </div>
                  <div className="other">
                    <button className="other-btn">Altro</button>
                  </div>
                </div>
              </div>
              <div className="container-three">
                <div className="title-container-three">
                  <p className="title-three">Esperienze</p>
                  <span className="icone-container-one"></span>
                  <div className="list"></div>
                  <Modal isOpen={showModal} closeModal={closeModal} />
                </div>
              </div>
            </div>
            <div className="home-page-col-two">
              <div className="language">
                <div className="edit">
                  <h3>Lingua del profilo</h3>
                  <FontAwesomeIcon icon={faPen} className="edit1" />
                </div>
                <span>Italiano</span>
                <hr />
                <div className="edit">
                  <h3>Public profile & URL</h3>
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <span>www.linkedin.com/in/1969a5279</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
