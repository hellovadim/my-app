import { API, GET_SOME_PHOTOS } from "../api/constans";

import axios from "axios";

const inctance = axios.create({
  baseURL: API,
});

export async function getAllPhotos() {
  try {
    return await inctance.get(GET_SOME_PHOTOS).then((result) => result.data);
  } catch (e) {
    console.log(e);
  }
}

export async function getSinglePhoto(id) {
  try {
    return await inctance.get(`/${id}`).then((result) => result.data);
  } catch (e) {
    console.log(e);
  }
}
