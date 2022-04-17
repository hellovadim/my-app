import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import Main from "../Main/Main";
import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";

const App = () => {
  const loadingPhotos = useSelector((state) => state.photos.loading);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={":id"} element={<SinglePhoto />} />
      </Routes>
    </Router>
  );
};

export default App;
