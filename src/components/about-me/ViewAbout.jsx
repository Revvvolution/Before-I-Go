import { useEffect, useState } from "react";
import "./About.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAboutEntryByViewcode } from "../../services/viewerService.jsx";
import { getAboutEntryByUserId } from "../../services/aboutService.jsx";
/* import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; */

export const ViewAbout = () => {
  const [aboutList, setAboutList] = useState([]);
  /* const [modal, setModal] = useState(false); */

  /* const toggle = () => setModal(!modal); */

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getAboutEntryByUserId(state.userId).then(
      (aboutObj) => {
        setAboutList(aboutObj);
      }
    );
  }, []);

  return (
    <>
      <section className="about-display">
        {aboutList?.map((currentAboutObj) => {
          return (
            <div key={currentAboutObj.id} className="about-card">
              <h1 className="about-title">{currentAboutObj.title}</h1>
              <div className="entry-box">
                <div className="about-entry">{currentAboutObj.entry}</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
