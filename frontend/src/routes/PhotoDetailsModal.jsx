import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import similarPhotos from "../mocks/photos.js";

const PhotoDetailsModal = ({
  setModalVisible,
  selectedPhotoId,
  alert,
  favPhotos,
  setAlert,
  setSelectedPhotoId,
  toggleFavourites,
}) => {
  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  const photo = similarPhotos.find((photo) => photo.id === selectedPhotoId);
  console.log(similarPhotos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image-container">
        {/* Display full size photo */}
        <img src={photo.urls.full} className="photo-details-modal__image" />
      </div>
      <p className="photo-details-modal__header">Similar Photos</p>

      {/* Display similar photos */}
      <div className="photo-details-modal__similar-photos">
        <PhotoList
          className="photo-details-modal__images"
          alert={alert}
          setAlert={setAlert}
          key={photo.id}
          id={photo.id}
          photos={similarPhotos}
          PhotoData={photo}
          favPhotos={favPhotos}
          setSelectedPhotoId={setSelectedPhotoId}
          toggleFavourites={toggleFavourites}
          setModalVisible={setModalVisible}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
