import { useEffect, useState } from "react";
import "./JournalList.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteJournalEntry,
  getJournalsByUserId,
} from "../../services/journalService.jsx";
/* import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; */

export const JournalList = ({ currentUser }) => {
  const [journalList, setJournalList] = useState([]);
  /* const [modal, setModal] = useState(false); */

  /* const toggle = () => setModal(!modal); */

  const navigate = useNavigate();

  useEffect(() => {
    getJournalsByUserId(currentUser.id).then((journals) => {
      const sortedJournal = journals.sort((a, b) => (a.date > b.date ? -1 : 1));
      setJournalList(sortedJournal);
    });
  }, [currentUser]);

  const formatDate = (isoString) => {
    return (
      new Date(isoString).toISOString().slice(5, 7) +
      " / " +
      new Date(isoString).toISOString().slice(8, 10) +
      " / " +
      new Date(isoString).toISOString().slice(0, 4)
    );
  };

  //DELETE journal object feature
  const handleDelete = (journalId) => {
    deleteJournalEntry(journalId).then(() => {
      window.alert("Journal entry successfully deleted");
      window.location.reload();
    });
  };

  return (
    <>
      <div className="create-container__journal">
        <figure className="new-entry-container__journal">
          <img
            className="clickable-icon"
            src="https://www.pikpng.com/pngl/b/356-3567628_quill-and-ink-png.png"
            alt="Journal Logo"
            onClick={() => {
              navigate("/journal/new-entry");
            }}
          />
          <figcaption>New Entry</figcaption>
        </figure>
      </div>
      <section key={currentUser.id} className="journal-display">
        {journalList?.map((currentJournal) => {
          const formattedDate = formatDate(currentJournal.date);

          return (
            <div key={currentJournal.id} className="journal-card">
              <span
                className="journal-edit"
                onClick={() => {
                  navigate(`/journal/edit/${currentJournal.id}`);
                }}
              >
                edit
              </span>

              <i
                className=" bi-trash journal-delete"
                onClick={() => {
                  handleDelete(currentJournal.id);
                }}
              />

              <h1 className="journal-title">{currentJournal.title}</h1>
              <div className="entry-box">
                <div className="journal-entry">{currentJournal.entry}</div>
              </div>
              <div className="journal-date">{formattedDate}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

{
  /* Modal function for clickable delete button */
}
/*                 <div>
                    <Modal isOpen={modal} toggle={toggle} centered={true} backdrop="static" fullscreen="sm" tabIndex={-10}>
                        <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this journal entry? It can't be recovered once removed.
                        </ModalBody>
                        <ModalFooter>
                        <Button color="danger" onClick={toggle}>
                            Yes, Delete
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                        </ModalFooter>
                    </Modal>
                </div> */
