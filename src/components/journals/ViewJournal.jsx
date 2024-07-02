import { useEffect, useState } from "react";
import "./JournalList.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getJournalByViewcode,
} from "../../services/viewerService.jsx";
import { useParams } from "react-router-dom";


export const ViewJournal = () => {
  const [journalList, setJournalList] = useState([]);

  const { viewcode } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    getJournalByViewcode(viewcode).then((journals) => {
      const sortedJournal = journals.sort((a, b) => (a.date > b.date ? -1 : 1));
      setJournalList(sortedJournal);
    });
  }, [viewcode]);

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
                <div className="journal-entry">{JSON.stringify(viewcodeparam)}{currentJournal.entry}</div>
              </div>
              <div className="journal-date">{formattedDate}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};