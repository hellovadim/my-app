import {
  FETCH_PHOTOS,
  LOADING_PHOTOS,
  FETCH_PHOTOS_LOADED,
  ERROR,
} from "../constants/photosConstant";

export const fetchPhotosLoaded = (photos) => {
  return {
    type: FETCH_PHOTOS_LOADED,
    payload: photos,
  };
};

export const fetchPhotos = () => {
  return {
    type: FETCH_PHOTOS,
  };
};
export const loadingPhotos = () => {
  return {
    type: LOADING_PHOTOS,
  };
};
