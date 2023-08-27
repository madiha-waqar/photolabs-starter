import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = (props) => {
  const handlePhotoClick = (id) => {
    // Check if the modal is already visible
    if (!props.modalVisible) {
      props.openPhotoModal(id);
    }
  };
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          alert={props.alert}
          setAlert={props.setAlert}
          key={photo.id}
          id={photo.id}
          PhotoData={photo}
          favPhotos={props.favPhotos}
          setSelectedPhotoId={props.setSelectedPhotoId}
          toggleFavourites={props.toggleFavourites}
          setModalVisible={props.setModalVisible}
          onClick={() => handlePhotoClick(photo.id)}
          openPhotoModal={props.openPhotoModal}
        />
      ))}
    </div>
  );
};

export default PhotoList;
