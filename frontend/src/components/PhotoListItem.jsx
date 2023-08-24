import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt={`Photo ${props.id}`}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.profile}
          alt={`${props.username}'s profile`}
        />
      </div>
      <span className="photo-list__user-info">{props.username}</span>
      <div className="photo-list__user-location">{props.location.city}</div>
      <div className="photo-list__user-location">{props.location.country}</div>
    </div>
  );
};

export default PhotoListItem;
