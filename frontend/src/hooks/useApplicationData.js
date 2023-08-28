import { useState } from "react";

const useApplicationData = () => {
  const [alert, setAlert] = useState(false);
  const [favPhotos, setFavPhotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const toggleFavourites = (id) => {
    if (favPhotos.includes(id)) {
      setFavPhotos((prev) => {
        return [...prev].filter((tempId) => tempId !== id);
      });
    } else {
      setFavPhotos((prev) => {
        return [...prev, id];
      });
    }
  };

  const openPhotoModal = (id) => {
    setSelectedPhotoId(id);
    setModalVisible(true);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhotoId(null);
    setModalVisible(false);
  };

  // Return the state and actions as an object
  return {
    state: {
      alert,
      favPhotos,
      modalVisible,
      selectedPhotoId,
    },
    actions: {
      setAlert,
      toggleFavourites,
      openPhotoModal,
      onClosePhotoDetailsModal,
    },
  };
};

export default useApplicationData;
