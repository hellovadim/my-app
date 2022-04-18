import {
  FETCH_PHOTOS_LOADED,
  LOADING_PHOTOS,
  FETCH_PHOTOS,
} from "../constants/photosConstant";

const initialState = {
  photos: [],
  loading: true,
  error: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_LOADED:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case LOADING_PHOTOS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PHOTOS: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default photosReducer;
