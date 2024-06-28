import { useState, useRef } from "react";
import "./Form.css"
import React from "react";
import { createAboutEntry } from "../../services/aboutService.jsx";
import { useNavigate } from "react-router-dom";

export const AboutMeForm = ({ currentUser }) => {
    const [aboutEntry, setAboutEntry] = useState({ title: "", entry: "" })
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (aboutEntry.entry && aboutEntry.title) {
            const newAboutEntry = {
                id: "",
                userId: currentUser.id,
                title: aboutEntry.title,
                entry: aboutEntry.entry,
            }

            createAboutEntry(newAboutEntry).then(() => {
                navigate("/about-me")
            })
        } else {
            window.alert("Please complete all fields before submitting")
        }
    }

    const handleInputChange = (event) => {
        setText(event.target.value)
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }

    return (
        <form>
        <h2>New About Me Entry</h2>
        <fieldset>
            <div className="form-group">
                <label className="form-label form-label__title">
                    Topic:
                </label>
                    <input
                    type="text" 
                    className="form-control form-title" 
                    placeholder="Enter your topic"
                    onChange={(event) => {
                        const aboutEntryCopy = {...aboutEntry}
                        aboutEntryCopy.title = event.target.value
                        setAboutEntry(aboutEntryCopy)
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
                    placeholder="Write about your topic..."
                    onChange={(event) => {
                        const aboutEntryCopy = {...aboutEntry}
                        aboutEntryCopy.entry = event.target.value
                        setAboutEntry(aboutEntryCopy)
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