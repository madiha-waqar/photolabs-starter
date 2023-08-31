import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "../styles/HomeRoute.scss";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const { state, actions } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar
        favPhotos={state.favPhotos}
        toggleFavourites={actions.toggleFavourites}
        topics={props.topics}
      />
      <PhotoList
        favPhotos={state.favPhotos}
        photos={props.photos}
        modalVisible={state.modalVisible}
        selectedPhotoId={state.selectedPhotoId}
        toggleFavourites={actions.toggleFavourites}
        openPhotoModal={actions.openPhotoModal}
        setSelectedPhoto={actions.setSelectedPhoto}
        onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
      />
      {state.modalVisible && state.selectedPhotoId && (
        <PhotoDetailsModal
          photos={props.photos}
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
