import {
  FETCH_SINGLE_PHOTO,
  FETCH_SINGLE_PHOTO_LOADED,
  LOADING_SINGLE_PHOTO,
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

export const loadingSinglePhoto = () => {
  return {
    type: LOADING_SINGLE_PHOTO,
  };
};
