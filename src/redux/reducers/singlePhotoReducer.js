import { FETCH_SINGLE_PHOTO_LOADED } from "../constants/singlePhotoConstant";

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
      };

    default:
      return state;
  }
};

export default singlePhotoReducer;
