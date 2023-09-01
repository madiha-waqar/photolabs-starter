import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ selected, displayAlert }) => {
  return (
    <div className="fav-badge">
      {/* Display FavIcon component with selected and displayAlert props */}
      <FavIcon selected={selected} displayAlert={displayAlert} />
    </div>
  );
};

export default FavBadge;
