import { useEffect, useState } from "react";
import "./About.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteAboutEntry,
  getAboutEntryByUserId,
} from "../../services/aboutService.jsx";
/* import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; */

export const AboutList = ({ currentUser }) => {
  const [aboutList, setAboutList] = useState([]);
  /* const [modal, setModal] = useState(false); */

  /* const toggle = () => setModal(!modal); */

  const navigate = useNavigate();

  useEffect(() => {
    getAboutEntryByUserId(currentUser.id).then((aboutObj) => {
      setAboutList(aboutObj);
    });
  }, [currentUser]);

  //DELETE aboutMe object feature
  const handleDelete = (aboutMeId) => {
    deleteAboutEntry(aboutMeId).then(() => {
      window.alert("About entry successfully deleted");
      window.location.reload();
    });
  };

  return (
    <>
      <div className="create-container__about">
        <figure className="new-entry-container__about">
          <img
            className="clickable-icon icon-about"
            src="/images/about-icon.png"
            alt="About Me Logo"
            onClick={() => {
              navigate("/about-me/new-entry");
            }}
          />
          <figcaption>New Entry</figcaption>
        </figure>
      </div>
      <section key={currentUser.id} className="about-display">
        {aboutList?.map((currentAboutObj) => {
          return (
            <div key={currentAboutObj.id} className="about-card">
              <span
                className="about-edit"
                onClick={() => {
                  navigate(`/about-me/edit/${currentAboutObj.id}`);
                }}
              >
                edit
              </span>

              <i
                className=" bi-trash about-delete"
                onClick={() => {
                  handleDelete(currentAboutObj.id);
                }}
              />

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
