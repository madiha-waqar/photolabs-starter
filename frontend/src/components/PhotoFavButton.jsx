import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [likeButton, setlikeButton] = useState(false);
  const clickLikeButton = () => {
    setlikeButton((prev) => !prev);
  };
  return (
    <div className="photo-list__fav-icon" onClick={clickLikeButton}>
      <div className="photo-list__fav-icon-svg">
        {likeButton ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }} />
        ) : (
          <i className="fa-regular fa-heart" style={{ color: "red" }} />
        )}
      </div>
    </div>
  );
}

export default PhotoFavButton;
