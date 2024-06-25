import { useEffect, useState } from "react";
import "./JournalList.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllJournals } from "../../services/journalService.jsx";



export const JournalList = ({ currentUser }) => {

    const [journalList, setJournalList] = useState([])
    const [creatorJournal, setCreatorJournal] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        getAllJournals().then(journals => {
            const journalList = journals
            setJournalList(journalList)
        })

    }, [])

    const getAndSetCreatorJournal = () => {
            const creatorJournal = journalList.filter(journals => journals.userId === currentUser.id)
            const sortedJournal = creatorJournal.sort((a,b) => a.date > b.date ? -1 : 1 )
            setCreatorJournal(sortedJournal)
    }

    useEffect(() => {
        getAndSetCreatorJournal()
    }, [journalList])

    const formatDate = (isoString) => {
        return  new Date(isoString).toISOString().slice(5, 7) +
                " / " +
                new Date(isoString).toISOString().slice(8, 10) +
                " / " +
                new Date(isoString).toISOString().slice(0, 4);
    }


    return(
        <>
        <div className="create-container">
                <figure className="new-entry-container__journal">
                    <img className="clickable-icon" src="https://www.pikpng.com/pngl/b/356-3567628_quill-and-ink-png.png" alt="Journal Logo"
                        onClick={() => {navigate("/journal/new-entry")}} />
                    <figcaption>New Entry</figcaption>
                </figure>
        </div>
        <section key={currentUser.id} className="journal-display">
        {creatorJournal?.map(currentJournal => {
            const formattedDate = formatDate(currentJournal.date);

            return <div key={currentJournal.id} className="journal-card">
                <h1 className="journal-title">{currentJournal.title}</h1>
                <div className="entry-box">
                    <div className="journal-entry">{currentJournal.entry}</div>
                </div>
                <div className="journal-date">{formattedDate}</div>
                </div>
        })}
        </section>
        </>
    )
}