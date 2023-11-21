import React, { useState, useEffect } from 'react';
import "../style/Experiences.css";
const YourComponent = () => {
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyNjk0YmM1NWU3ZTAwMThmODNkMDEiLCJpYXQiOjE2OTk4OTk3MjQsImV4cCI6MTcwMTEwOTMyNH0.d1O84PacnEGTgRhcuz5kOLpi3wFfaDLdCE-N3kIQEPY";

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6552694bc55e7e0018f83d01/experiences",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer $ {token}',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setExperiences(data); 
      } else {
        console.error("Errore nella chiamata GET:", response.status);
      }
    } catch (error) {
      console.error("Errore durante la chiamata GET:", error);
    }
  };

  useEffect(() => {
    getExperiences();
  }, []); 

  return (
    <div className='exp'>

      {experiences.map((experience, index) => (
        <div className='list-exp' key={index}>
          <h3>{experience.role}</h3>
          <p>{experience.company}</p>

          <p>{experience.description}</p>
          <p>{experience.area}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;