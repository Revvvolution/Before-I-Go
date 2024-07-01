import { useState, useRef } from "react"
import "./Form.css"
import React from "react"
import { createPhotoMemory } from "../../services/photoServices.jsx"
import { useNavigate } from "react-router-dom"

export const PhotoMemoryForm = ({ currentUser }) => {
    const [photoMemory, setPhotoMemory] = useState({ image: "", comment: "" })
    // const [newImage, setNewImage] = useState({ image: "" })
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (photoMemory.image) {
            const newPhotoMemory = {
                id: "",
                userId: currentUser.id,
                viewcode: currentUser.viewcode,
                image: photoMemory.image,
                comment: photoMemory.comment,
            }

            createPhotoMemory(newPhotoMemory).then(() => {
                navigate("/photo-memories")
            })
        } else {
            window.alert("Please select an image")
        }
    }
    
    const handleInputChange = (event) => {
        setText(event.target.value);
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };
    
    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = (event) => {
    //         const base64Image = event.target.result;
    //         setNewImage(base64Image)
    //       };
    //       reader.readAsDataURL(file);
    //     }
    // };



    return (
        <form>
            <h2>New Photo Memory</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label form-label__image">
                        Image:
                    </label>
                        <input
                        type="text" 
                        className="form-control form-image" 
                        placeholder="Paste image URL"
                        /* onChange={handleImageUpload} */
                        onChange={(event) => {
                            const photoMemoryCopy = {...photoMemory}
                            photoMemoryCopy.image = event.target.value
                            setPhotoMemory(photoMemoryCopy)
                            }}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label form-label__entry">Comment:</label>
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
                        className="form-control form-comment auto-resizing" 
                        placeholder="Leave a comment or description of this image..."
                        onChange={(event) => {
                            const photoMemoryCopy = {...photoMemory}
                            photoMemoryCopy.comment = event.target.value
                            setPhotoMemory(photoMemoryCopy)
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
