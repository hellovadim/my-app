import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";
// import { fetchPhotos } from "../../redux/actions/photosAction";
import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";

const App = () => {
  const loading = useSelector((state) => state.singlePhoto.loading);
  const dispatch = useDispatch();
  console.log(loading);
  useEffect(() => {
    dispatch(fetchSinglePhoto(2));
  }, []);
  return (
    <>
      <Header />
      <Container>
        <h1>Hello</h1>
        {loading ? <Loader /> : null}
      </Container>
    </>
  );
};

export default App;
