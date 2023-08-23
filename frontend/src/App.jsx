import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {
  // Create an array to store photo data objects
  const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {/* Display PhotoListItem components in a row */}
      {photos.map((photo, index) => (
        <PhotoListItem key={index} {...photo} />
      ))}
    </div>
  );
};

export default App;
