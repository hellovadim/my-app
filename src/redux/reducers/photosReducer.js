import { FETCH_PHOTOS, FETCH_PHOTOS_LOADED } from "../constants/photosConstant";

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
      };
    default:
      return state;
  }
};

export default photosReducer;
