import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Row, Button, Col } from "react-bootstrap";

import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";

import { getSinglePhoto } from "../../axios/axios";
const App = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.singlePhoto);

  return (
    <>
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          Button #1
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button as={Col} variant="success">
          Button #3
        </Button>
      </Row>
    </>
  );
};

export default App;
