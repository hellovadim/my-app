import {
  FETCH_SINGLE_PHOTO_LOADED,
  LOADING_SINGLE_PHOTO,
} from "../constants/singlePhotoConstant";

const initialState = {
  singlePhoto: {},
  loading: true,
  error: false,
};

const singlePhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PHOTO_LOADED:
      return {
        ...state,
        singlePhoto: action.payload,
        loading: false,
      };
    case LOADING_SINGLE_PHOTO:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default singlePhotoReducer;
