import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import "../style/Modal.css";
const ContactFormModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [experiences, setExperiences] = useState([]);
  const [role, setRole] = useState();
  const [company, setCompany] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [area, setArea] = useState();
  const [description, setDescription] = useState();
  // const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyNjk0YmM1NWU3ZTAwMThmODNkMDEiLCJpYXQiOjE2OTk4OTk3MjQsImV4cCI6MTcwMTEwOTMyNH0.d1O84PacnEGTgRhcuz5kOLpi3wFfaDLdCE-N3kIQEPY";
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6552694bc55e7e0018f83d01/experiences",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            role: role,
            company: company,
            startDate: startDate,
            endDate: endDate,
            description: description,
            area: area,
          }),
        }
      );

      if (response.ok) {
        setExperiences([...experiences]);
      } else {
        console.error("Errore nella chiamata POST:", response.status);
      }
    } catch (error) {
      console.error("Errore durante la chiamata POST:", error);
    }
    // Esempio di logica di invio dati
    console.log("Dati del form inviati!");
    closeModal();
  };

  return (
    <div className="modale">
      <div className="title-container-three">
        <FontAwesomeIcon
          icon={faPlus}
          className="icon"
          style={{ marginRight: "50px" }}
          onClick={openModal}
        />
        <FontAwesomeIcon icon={faPen} className="icon" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modale"
      >
        <form id="contact" onSubmit={handleSubmit}>
          <h3>Aggiungi le tue esperienze</h3>

          <fieldset>
            <input
              placeholder="Ruolo"
              type="text"
              tabIndex="1"
              required
              autoFocus
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Azienda"
              type="text"
              tabIndex="2"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Inizio"
              type="date"
              tabIndex="3"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              placeholder="Fine"
              type="date"
              tabIndex="3"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Paese"
              type="text"
              tabIndex="4"
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Commenta"
              tabIndex="5"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" data-submit="...Sending">
              Submit
            </button>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
