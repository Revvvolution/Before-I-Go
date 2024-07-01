import { useState, useRef } from "react"
import "./Form.css"
import React from "react"
import { createJournalEntry } from "../../services/journalService.jsx"
import { useNavigate } from "react-router-dom"

export const JournalForm = ({ currentUser }) => {
    const [journal, setJournal] = useState({ title: "", entry: ""})
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (journal.entry) {
            const newJournalEntry = {
                id: "",
                userId: currentUser.id,
                viewcode: currentUser.viewcode,
                title: journal.title,
                entry: journal.entry,
                date: new Date(),
            }

            createJournalEntry(newJournalEntry).then(() => {
                navigate("/journal")
            })
        } else {
            window.alert("Please fill out 'Entry:' field")
        }
    }

    const handleInputChange = (event) => {
        setText(event.target.value);
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      };

    return (
        <form>
            <h2>New Journal Entry</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label form-label__title">
                        Title:
                    </label>
                        <input
                        type="text" 
                        className="form-control form-title" 
                        placeholder="Enter title (optional)..."
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
                        value={text}
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
                        placeholder="Journal entry..."
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
                    <button className="form-btn btn-info" onClick={handleSave}>Submit</button>
                </div>
            </fieldset>
        </form>
    )
}
