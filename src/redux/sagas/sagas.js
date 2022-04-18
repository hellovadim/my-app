import { put, takeEvery, call } from "redux-saga/effects";

import { fetchPhotosLoaded, loadingPhotos } from "../actions/photosAction";
import {
  fetchSinglePhotoLoaded,
  fetchSinglePhoto,
  loadingSinglePhoto,
} from "../actions/singlePhotoActions";
import {} from "../actions/singlePhotoActions";
import { getAllPhotos, getSinglePhoto } from "../../axios/axios";
import { FETCH_PHOTOS } from "../constants/photosConstant";
import { FETCH_SINGLE_PHOTO } from "../constants/singlePhotoConstant";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchPhotosWorker() {
  yield call(loadingPhotos);
  yield delay(500);
  const res = yield call(getAllPhotos);
  yield put(fetchPhotosLoaded(res));
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}

function* fetchSinglePhotoWorker({ id }) {
  yield call(loadingSinglePhoto);
  yield delay(500);
  yield call(fetchSinglePhoto);
  const res = yield call(getSinglePhoto, id);
  yield put(fetchSinglePhotoLoaded(res));
}

export function* singlePhotoWatcher() {
  yield takeEvery(FETCH_SINGLE_PHOTO, fetchSinglePhotoWorker);
}
