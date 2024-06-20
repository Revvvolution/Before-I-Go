import { useEffect, useState } from "react";
import "./JournalList.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllJournals } from "../../services/journalService.jsx";



export const JournalList = ({ currentUser }) => {

    const [journalList, setJournalList] = useState([])
    const [creatorJournal, setCreatorJournal] = useState([])

    useEffect(() => {

        getAllJournals().then(journals => {
            const journalList = journals
            setJournalList(journalList)
        })

    }, [])

    const getAndSetCreatorJournal = () => {
            const creatorJournal = journalList.filter(journals => journals.userId === currentUser.id)
            const sortedJournal = creatorJournal.sort((a,b) => a.date > b.date ? 1 : -1 )
            setCreatorJournal(sortedJournal)
    }

    useEffect(() => {
        getAndSetCreatorJournal()
    }, [journalList])


    return(
        <>
        <section key={currentUser.id} className="journal-display">
        {creatorJournal?.map(currentJournal => {

            return <div key={currentJournal.id} className="journal-card">
                <h1 className="journal-title">{currentJournal.title}</h1>
                <div className="entry-box">
                    <div className="journal-entry">{currentJournal.entry}</div>
                </div>
                <div className="journal-date">{currentJournal.date}</div>
                </div>
        })}
        </section>
        </>
    )
}