import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photos = props.PhotoData;

  const photoCard = photos.map((photo) => (
    <li className="photo-list" key={photo.id}>
      <div className="photo-list__item">
        <PhotoFavButton />
        <div>
          <img className="photo-list__image" src={photo.urls.full} />
        </div>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div className="photo-list__user-info">
            <span>{photo.username}</span>
            <br />
            <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
          </div>
        </div>
      </div>
    </li>
  ));
  return <ul>{photoCard}</ul>;
};
export default PhotoListItem;
