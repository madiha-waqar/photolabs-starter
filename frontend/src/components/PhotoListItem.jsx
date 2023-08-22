import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt={`Photo ${props.id}`} />

      <div className="user-info">
        <img src={props.profile} alt={`${props.username}'s profile`} />
      </div>
      <span>{props.username}</span>
      <div className="location">
        {(props.location.city, props.location.country)}
      </div>
    </div>
  );
};

export default PhotoListItem;
