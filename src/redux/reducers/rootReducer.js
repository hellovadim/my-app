import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import singlePhotoReducer from "./singlePhotoReducer";

export default combineReducers({
  photos: photosReducer,
  singlePhoto: singlePhotoReducer,
});
