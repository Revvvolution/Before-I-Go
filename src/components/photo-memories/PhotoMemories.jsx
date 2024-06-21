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
        <div className="memory-card">
                {currentCreatorPhotos?.map((photo) => (
                    <figure className="photo-container" key={photo.image}>
                    <img
                        className="pMemo-photo"
                        key={photo.id} 
                        src={photo.image} 
                        alt=""
                        // onClick={() => handlePhotoClick(photo.id)}
                    />
                    </figure>
                        // {/* {activePhotoId === photo.id && <p>{photo.comment}</p>} */}
                ))}
        </div>
        </section>
        </>
    )
}