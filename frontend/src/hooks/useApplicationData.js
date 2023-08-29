// Custom Hook: useApplicationData
import { useReducer } from "react";

// actions
export const ACTIONS = {
  SET_SELECTED_PHOTO_ID: "SET_SELECTED_PHOTO_ID",
  SET_FAV_PHOTO_ADDED: "SET_FAV_PHOTO_ADDED",
  SET_FAV_PHOTO_REMOVED: "SET_FAV_PHOTO_REMOVED",
  SET_PHOTO_MODAL_VISIBLE: "SET_PHOTO_MODAL_VISIBLE",
  SET_PHOTO_MODAL_CLOSE: "SET_PHOTO_MODAL_CLOSE",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

// state data
const initialState = {
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
        // selectedPhotoId: null,
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

  return {
    state,
    actions: {
      openPhotoModal,
      toggleFavourites,
      onClosePhotoDetailsModal,
      setSelectedPhoto,
    },
  };
}

export default useApplicationData;
