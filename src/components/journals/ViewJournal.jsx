import { useEffect, useState } from "react";
import "./JournalList.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getJournalByViewcode,
} from "../../services/viewerService.jsx";
import { getJournalsByUserId } from "../../services/journalService.jsx";


export const ViewJournal = () => {
  const [journalList, setJournalList] = useState([]);

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getJournalsByUserId(state.userId).then((journals) => {
      const sortedJournal = journals.sort((a, b) => (a.date > b.date ? -1 : 1));
      setJournalList(sortedJournal);
    });
  }, []);

  const formatDate = (isoString) => {
    return (
      new Date(isoString).toISOString().slice(5, 7) +
      " / " +
      new Date(isoString).toISOString().slice(8, 10) +
      " / " +
      new Date(isoString).toISOString().slice(0, 4)
    );
  };


  return (
    <>
      <section className="journal-display">
        {journalList?.map((currentJournal) => {
          const formattedDate = formatDate(currentJournal.date);

          return (
            <div key={currentJournal.id} className="journal-card">

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