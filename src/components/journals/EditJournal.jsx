import { useEffect, useState, useRef } from "react";
import "../../entry-forms/Form.css"
import { useNavigate, useParams } from "react-router-dom";
import { updateJournalEntry, getJournalById } from "../../services/journalService.jsx";

export const EditJournal = ({ currentUser }) => {
    const [journal, setJournal] = useState({title: "", entry: ""})
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const {journalId} = useParams()

    const navigate = useNavigate()

    useEffect (() => {
        getJournalById(journalId).then((journal) => {
            setJournal(journal)
        })
    }, [])


    const handleEdit = (event) => {
        event.preventDefault()

        if (journal.entry) {
            const editedJournal = {
                id: journal.id,
                userId: currentUser.id,
                title: journal.title,
                entry: journal.entry,
                date: journal.date,
            }

            updateJournalEntry(editedJournal).then(() => {
                navigate("/journal")
            })
        } else {
            window.alert("Please populate Entry field")
        }
    }

 /*    const handleInputChange = (event) => {
        const stateCopy = { ...journal }
        stateCopy[event.target.name] = event.target.value
        setJournal(stateCopy)
    } */

    const handleInputChange = (event) => {
        setText(event.target.value);
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      };

    return (
      <>
        <form>
            <h2>Edit Journal Entry</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label form-label__title">
                        Title (optional):
                    </label>
                        <input
                        type="text" 
                        className="form-control form-title"
                        value={journal?.title ? journal.title : ""}
                        onChange={(event) => {
                            const journalCopy = {...journal}
                            journalCopy.title = event.target.value
                            setJournal(journalCopy)
                            }}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label form-label__entry">Entry:</label>
                    <textarea
                        ref={textAreaRef}
                        value={journal?.entry ? journal.entry : text}
                        rows="1"
                        type="text"
                        style={{
                            width: '50vw',
                            maxHeight: '300px',
                            padding: '10px',
                            boxSizing: 'border-box',
                            fontSize: '16px',
                            lineHeight: '1.5',
                        }} 
                        className="form-control form-entry auto-resizing" 
                        onChange={(event) => {
                            const journalCopy = {...journal}
                            journalCopy.entry = event.target.value
                            setJournal(journalCopy)
                            handleInputChange(event)
                        }}
                        >
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={handleEdit}>Save And Update</button>
                </div>
            </fieldset>
        </form>
      </>
    )
}