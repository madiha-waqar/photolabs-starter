import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import similarPhotos from "../mocks/photos.js";
import PhotoFavButton from "../components/PhotoFavButton";

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

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image">
        {/* Display full size photo */}
        <img src={photo.urls.full} className="photo-details-modal__image" />

        <PhotoFavButton
          alert={alert}
          setAlert={setAlert}
          favPhotos={favPhotos}
          toggleFavourites={toggleFavourites}
          id={selectedPhotoId}
        />

        <div className="photo-list__user-details align">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div className="photo-list__user-info">
            <span>{photo.user.name}</span>
            <br />
            <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
          </div>
        </div>
      </div>
      <p className="photo-details-modal__header line">Similar Photos</p>

      {/* Display similar photos */}
      <div>
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
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
