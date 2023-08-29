import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import similarPhotos from "../mocks/photos.js";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import useApplicationData from "../hooks/useApplicationData";

const PhotoDetailsModal = ({
  selectedPhotoId,
  alert,
  favPhotos,
  setAlert,
  setSelectedPhoto,
  toggleFavourites,
  openPhotoModal,
  onClosePhotoDetailsModal,
}) => {
  //invoke the custom hook
  //const { actions } = useApplicationData();

  const photo = similarPhotos.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__container">
        {/* Display fav icon on modal full size photo */}
        <div className="photo-details-modal__photo-fav-button">
          <PhotoFavButton
            alert={alert}
            setAlert={setAlert}
            favPhotos={favPhotos}
            toggleFavourites={toggleFavourites}
            id={selectedPhotoId}
          />
        </div>

        {/* Display full size photo */}
        <img src={photo.urls.full} className="photo-details-modal__image" />

        <div className="photo-list__user-details photo-list__user-details-align">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div className="photo-list__user-info">
            <span>{photo.user.name}</span>
            <br />
            <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
          </div>
        </div>
      </div>

      <p className="photo-details-modal__header photo-details-modal__line">
        Similar Photos
      </p>

      {/* Display similar photos */}
      <div>
        <PhotoList
          className="photo-details-modal__images"
          alert={alert}
          setAlert={setAlert}
          key={photo.id}
          id={photo.id}
          PhotoData={photo}
          favPhotos={favPhotos}
          setSelectedPhoto={setSelectedPhoto}
          toggleFavourites={toggleFavourites}
          openPhotoModal={openPhotoModal}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
