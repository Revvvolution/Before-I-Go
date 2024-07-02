import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PhotoMemories.css";
import { getPhotoMemoryByViewcode } from "../../services/viewerService.jsx";
import { getPhotoMemoryByUserId } from "../../services/photoServices.jsx";

export const ViewPhotoMemories = ({}) => {
  const [currentCreatorPhotos, setCurrentCreatorPhotos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPhotoMemoryByUserId(1).then(
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
