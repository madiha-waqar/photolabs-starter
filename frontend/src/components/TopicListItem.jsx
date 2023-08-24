import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topics = props.TopicData;

  const topicItem = topics.map((topic) => (
    <div className="topic-list__item" key={topic.id}>
      <span>{topic.title}</span>
    </div>
  ));
  return <div>{topicItem}</div>;
};

export default TopicListItem;
