import React from "react";
import "./App.scss";
import TopicList from "components/TopicList";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar {...topics} />
      <PhotoList />
      <TopicList {...topics} />
    </div>
  );
};

export default App;
