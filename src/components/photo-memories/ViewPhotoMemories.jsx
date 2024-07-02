import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PhotoMemories.css";
import { getPhotoMemoryByViewcode } from "../../services/viewerService.jsx";
import { getPhotoMemoryByUserId } from "../../services/photoServices.jsx";

export const ViewPhotoMemories = ({}) => {
  const [currentCreatorPhotos, setCurrentCreatorPhotos] = useState([]);

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getPhotoMemoryByUserId(state.userId).then(
      (pMemo) => {
        setCurrentCreatorPhotos(pMemo);
      }
    );
  }, []);

  return (
    <>
      <button className="btn-back" onClick={() => navigate(-1)}>Go Back</button>
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
