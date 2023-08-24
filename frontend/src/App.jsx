import React from "react";
import PhotoList from "./components/PhotoList";
import "./App.scss";
import TopicList from "components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
      <TopicList />
    </div>
  );
};

export default App;
