import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const clickHandler = () => {
    props.setAlert(props.alert === false ? true : false);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge
        selected={props.favPhotos.length > 0}
        displayAlert={props.favPhotos.length > 0}
      />
    </div>
  );
};

export default TopNavigation;
