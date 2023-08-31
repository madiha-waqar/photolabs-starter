// Custom Hook: useApplicationData
import { useReducer, useEffect } from "react";

// actions
export const ACTIONS = {
  SET_SELECTED_PHOTO_ID: "SET_SELECTED_PHOTO_ID",
  SET_FAV_PHOTO_ADDED: "SET_FAV_PHOTO_ADDED",
  SET_FAV_PHOTO_REMOVED: "SET_FAV_PHOTO_REMOVED",
  SET_PHOTO_MODAL_VISIBLE: "SET_PHOTO_MODAL_VISIBLE",
  SET_PHOTO_MODAL_CLOSE: "SET_PHOTO_MODAL_CLOSE",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
};

// state data
const initialState = {
  photoData: [],
  topicData: [],
  favPhotos: [],
  modalVisible: false,
  selectedPhotoId: null,
};

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.SET_SELECTED_PHOTO_ID:
      return {
        ...state,
        selectedPhotoId: action.payload,
      };
    case ACTIONS.SET_FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload],
      };
    case ACTIONS.SET_FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter((id) => id !== action.payload),
      };

    case ACTIONS.SET_PHOTO_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: true,
      };
    case ACTIONS.SET_PHOTO_MODAL_CLOSE:
      return {
        ...state,
        modalVisible: false,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const openPhotoModal = () => {
    dispatch({ type: ACTIONS.SET_PHOTO_MODAL_VISIBLE });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SET_PHOTO_MODAL_CLOSE });
  };

  const toggleFavourites = (id) => {
    if (state.favPhotos.includes(id)) {
      dispatch({ type: ACTIONS.SET_FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.SET_FAV_PHOTO_ADDED, payload: id });
    }
  };

  const setSelectedPhoto = (id) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO_ID, payload: id || null });
  };

  //Fetch photo data
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);
  // useEffect(() => {
  //   fetch("/api/photos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched Photo Data:", data);
  //       dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
  //     })
  //     .catch((error) => {
  //       console.error("Error Fetching Photo Data:", error);
  //     });
  // }, []);

  // Fetch topic data
  useEffect(() => {
    fetch("/api/topics")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []); // Empty dependency array to render once after mounting

  return {
    state,
    actions: {
      openPhotoModal,
      toggleFavourites,
      onClosePhotoDetailsModal,
      setSelectedPhoto,
      photoData: state.photoData,
      topicData: state.topicData,
    },
  };
}

export default useApplicationData;
