import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Main from "../Main/Main";
import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";

const App = () => {
  const loadingPhotos = useSelector((state) => state.photos.loading);

  return (
    <>
      <Header />
      <Container>
        <Main />
        {loadingPhotos ? <Loader /> : null}
      </Container>
    </>
  );
};

export default App;
