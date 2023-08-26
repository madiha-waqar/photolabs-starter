import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = () => {
  const [alert, setAlert] = useState(false);
  const [favPhotos, setfavPhotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const toggleFavourites = (id) => {
    if (favPhotos.includes(id)) {
      setfavPhotos((prev) => {
        return [...prev].filter((tempId) => tempId !== id);
      });
    } else {
      setfavPhotos((prev) => {
        return [...prev, id];
      });
    }
  };

  const openPhotoModal = (id) => {
    setSelectedPhotoId(id);
    setModalVisible(true);
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        alert={alert}
        setAlert={setAlert}
        favPhotos={favPhotos}
        toggleFavourites={toggleFavourites}
      />
      <PhotoList
        alert={alert}
        setAlert={setAlert}
        favPhotos={favPhotos}
        toggleFavourites={toggleFavourites}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        openPhotoModal={openPhotoModal}
      />
      {modalVisible && selectedPhotoId !== null && (
        <PhotoDetailsModal
          selectedPhotoId={selectedPhotoId}
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
};

export default HomeRoute;
