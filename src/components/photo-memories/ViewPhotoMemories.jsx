import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PhotoMemories.css";
import { getPhotoMemoryByViewcode } from "../../services/viewerService.jsx";

export const ViewPhotoMemories = ({}) => {
  const [currentCreatorPhotos, setCurrentCreatorPhotos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPhotoMemoryByViewcode("30aac41b-1bf0-48df-9b83-cde9cd12baef").then(
      (pMemo) => {
        setCurrentCreatorPhotos(pMemo);
      }
    );
  }, []);

  return (
    <>
      <section className="photo-memory-page">
        {currentCreatorPhotos?.map((photo) => (
          <div className="memory-card" key={photo.id}>
            <figure className="photo-container">
              <img className="pMemo-photo" src={photo.image} alt="" />
            </figure>
            <p className="p-comment">{photo.comment}</p>
          </div>
        ))}
      </section>
    </>
  );
};
