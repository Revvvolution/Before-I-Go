import { useEffect, useState, useRef } from "react";
import "../entry-forms/Form.css"
import { useNavigate, useParams } from "react-router-dom";
import { updateAboutEntry, getAboutEntryById } from "../../services/aboutService.jsx";

export const EditAbout = ({ currentUser }) => {
    const [aboutEntry, setAboutEntry] = useState({ title: "", entry: "" })
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const {aboutMeObjId} = useParams()

    const navigate = useNavigate()

    useEffect (() => {
        getAboutEntryById(aboutMeObjId).then((about) => {
            setAboutEntry(about)
        })
    }, [])


    const handleEdit = (event) => {
        event.preventDefault()

        if (aboutEntry.entry && aboutEntry.title) {
            const editedAboutEntry = {
                id: aboutEntry.id,
                userId: currentUser.id,
                title: aboutEntry.title,
                entry: aboutEntry.entry,
            }

            updateAboutEntry(editedAboutEntry).then(() => {
                navigate("/about-me")
            })
        } else {
            window.alert("Please complete all fields before saving")
        }
    }


    const handleInputChange = (event) => {
        setText(event.target.value);
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      };



      return (
        <>
        <form>
        <h2>Edit About Me Entry</h2>
        <fieldset>
            <div className="form-group">
                <label className="form-label form-label__title">
                    Topic:
                </label>
                    <input
                    type="text" 
                    className="form-control form-title" 
                    value={aboutEntry?.title ? aboutEntry.title : ""}
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
                    value={aboutEntry?.entry ? aboutEntry.entry : text}
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
                <button className="form-btn btn-info" onClick={handleEdit}>Save And Update</button>
            </div>
        </fieldset>
    </form>
    </>
    )

}