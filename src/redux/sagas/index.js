import { all } from "redux-saga/effects";
import { photosWatcher, singlePhotoWatcher } from "./sagas";

export function* rootSaga() {
  yield all([photosWatcher(), singlePhotoWatcher()]);
}
