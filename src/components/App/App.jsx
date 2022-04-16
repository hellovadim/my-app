import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSinglePhotoLoaded } from "../../redux/actions/singlePhotoActions";

const App = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.singlePhoto);

  console.log(photos);
  useEffect(() => {
    dispatch(fetchSinglePhotoLoaded(2));
  }, []);

  return <h1>Hello</h1>;
};

export default App;
