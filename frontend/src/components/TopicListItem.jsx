import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topics = props.TopicData;

  const topicHandler = (id) => {
    props.fetchPhotosByTopic(id); // function with the topic id
  };

  const topicItem = topics.map((topic) => (
    <div
      className="topic-list__item"
      key={topic.id}
      onClick={() => topicHandler(topic.id)} // Pass the topic ID
    >
      <span>{topic.title}</span>
    </div>
  ));
  return <div>{topicItem}</div>;
};

export default TopicListItem;
