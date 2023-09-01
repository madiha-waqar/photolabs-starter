import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      {/* PhotoLab app logo text */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Style topic list to the right in navigation bar */}
      <div className="top-nav-bar__right">
        <TopicList
          topics={props.topics}
          fetchPhotosByTopic={props.fetchPhotosByTopic}
        />
        <FavBadge
          // display selected and set alert when there is any favPhoto
          selected={props.favPhotos.length > 0}
          displayAlert={props.favPhotos.length > 0}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
