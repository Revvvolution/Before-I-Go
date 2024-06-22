import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPhotoMemories } from "../../services/photoServices.jsx";
import "./PhotoMemories.css"


export const PhotoMemories = ({ currentUser }) => {

    const [allPhotos, setAllPhotos] = useState([]);
    const [currentCreatorPhotos, setCurrentCreatorPhotos] = useState([]);
    const [activePhotoId, setActivePhotoId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        getAllPhotoMemories().then(pMemo => {
            const pMemoList = pMemo
            setAllPhotos(pMemoList)
        })
    }, [])


    const getAndSetCreatorPhotos = () => {
        const creatorPhotos = allPhotos.filter(pMemos => pMemos.userId === currentUser.id)
        setCurrentCreatorPhotos(creatorPhotos)
    }
    
    useEffect(() => {
        getAndSetCreatorPhotos()
    }, [allPhotos])

    const handlePhotoClick = (photoId) => {
        setActivePhotoId(photoId === activePhotoId ? null : photoId)
    }


    return (
        <>
        <section className="photo-memory-page" key={currentUser.viewcode}>
                {currentCreatorPhotos?.map((photo) => (
                    <div className="memory-card">
                        <figure className="photo-container" key={photo.image} photoId={photo.id}>
                        <img
                            className="pMemo-photo"
                            key={photo.id} 
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