import {
  FETCH_SINGLE_PHOTO,
  FETCH_SINGLE_PHOTO_LOADED,
} from "../constants/singlePhotoConstant";

export const fetchSinglePhotoLoaded = (photo) => {
  return {
    type: FETCH_SINGLE_PHOTO_LOADED,
    payload: photo,
  };
};

export const fetchSinglePhoto = (id) => {
  return {
    type: FETCH_SINGLE_PHOTO,
    id,
  };
};
