import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPhotoMemories, getPhotoMemoryByUserId } from "../../services/photoServices.jsx";
import "./PhotoMemories.css"


export const PhotoMemories = ({ currentUser }) => {

    const [currentCreatorPhotos, setCurrentCreatorPhotos] = useState([]);
    const [activePhotoId, setActivePhotoId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        getPhotoMemoryByUserId(currentUser.id).then(pMemo => {
            setCurrentCreatorPhotos(pMemo)
        })
    }, [currentUser])

    

    const handlePhotoClick = (photoId) => {
        setActivePhotoId(photoId === activePhotoId ? null : photoId)
    }


    return (
        <>
        <div className="create-container__pMemo">
            <figure className="new-entry-container__pMemo">
                <img className="clickable-icon icon-pMemo" src="/images/polaroid-frame.png" alt="About Me Logo"
                    onClick={() => {navigate("/photo-memories/new-entry")}} />
                <figcaption>New Entry</figcaption>
            </figure>
        </div>
        <section className="photo-memory-page" key={currentUser.viewcode}>
                {currentCreatorPhotos?.map((photo) => (
                    <div className="memory-card" key={photo.id}>
                        <figure className="photo-container" key={photo.image}>
                        <img
                            className="pMemo-photo" 
                            src={photo.image} 
                            alt=""
                            onClick={() => handlePhotoClick(photo.id)}
                        />
                        </figure>
                        <p className="p-comment">{photo.comment}</p>                    
                    </div>
                ))}
        </section>
        </>
    )
}