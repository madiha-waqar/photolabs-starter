import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photo = props.PhotoData;
  return (
    <div className="photo-list__item" key={photo.id}>
      {/* Render the PhotoFavButton component */}
      <PhotoFavButton
        alert={props.alert}
        setAlert={props.setAlert}
        favPhotos={props.favPhotos}
        id={props.id}
        toggleFavourites={props.toggleFavourites}
      />
      <div>
        {/* Display full size photo image */}
        <img
          className="photo-list__image"
          src={photo.urls.full}
          onClick={() => props.onClick(photo.id)}
        />
      </div>
      {/* Display user information i-e user profile image, username, city and country */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
          <br />
          <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
        </div>
      </div>
    </div>
  );
};
export default PhotoListItem;
