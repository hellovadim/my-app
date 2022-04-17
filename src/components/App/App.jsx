import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";

import { getSinglePhoto } from "../../axios/axios";
const App = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.singlePhoto);

  return <h1>Hello</h1>;
};

export default App;
