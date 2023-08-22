import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img
        src={sampleDataForPhotoListItem.imageSource}
        alt={`Photo ${sampleDataForPhotoListItem.id}`}
      />

      <div className="user-info">
        <img
          src={sampleDataForPhotoListItem.profile}
          alt={`${sampleDataForPhotoListItem.username}'s profile`}
        />
      </div>
      <span>{sampleDataForPhotoListItem.username}</span>
      <div className="location">
        {
          (sampleDataForPhotoListItem.location.city,
          sampleDataForPhotoListItem.location.country)
        }
      </div>
    </div>
  );
};

export default PhotoListItem;
