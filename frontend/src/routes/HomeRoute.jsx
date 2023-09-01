import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "../styles/HomeRoute.scss";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = () => {
  // Initialize application data using custom hook
  const { state, actions } = useApplicationData();

  return (
    <div className="home-route">
      {/* Render navigation bar */}
      <TopNavigationBar
        favPhotos={state.favPhotos}
        toggleFavourites={actions.toggleFavourites}
        topics={state.topicData}
        fetchPhotosByTopic={actions.fetchPhotosByTopic}
      />
      {/* Render photos */}
      <PhotoList
        favPhotos={state.favPhotos}
        photos={state.photoData}
        modalVisible={state.modalVisible}
        selectedPhotoId={state.selectedPhotoId}
        toggleFavourites={actions.toggleFavourites}
        openPhotoModal={actions.openPhotoModal}
        setSelectedPhoto={actions.setSelectedPhoto}
        onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
      />
      {/* Render data in modal if it is open */}
      {state.modalVisible && state.selectedPhotoId && (
        <PhotoDetailsModal
          photos={state.photoData}
          selectedPhotoId={state.selectedPhotoId}
          favPhotos={state.favPhotos}
          toggleFavourites={actions.toggleFavourites}
          setSelectedPhoto={actions.setSelectedPhoto}
          openPhotoModal={actions.openPhotoModal}
          onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
