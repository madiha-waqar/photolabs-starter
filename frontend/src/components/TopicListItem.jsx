import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

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
