import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      <TopicListItem
        TopicData={props.topics}
        fetchPhotosByTopic={props.fetchPhotosByTopic} // pass the function to component
      />
    </div>
  );
};

export default TopicList;
