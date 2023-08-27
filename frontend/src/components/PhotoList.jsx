import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = (props) => {
  const handlePhotoClick = (id) => {
    props.openPhotoModal(id);
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
        />
      ))}
    </div>
  );
};

export default PhotoList;
