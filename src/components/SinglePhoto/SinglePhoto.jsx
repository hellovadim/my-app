import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

import { fetchSinglePhoto } from "../../redux/actions/singlePhotoActions";
import Loader from "../Loader/Loader";

import "./SinglePhoto.scss";

const SinglePhoto = () => {
  const { singlePhoto, loading } = useSelector((state) => state.singlePhoto);
  const { thumbnailUrl, title } = singlePhoto;
  const dispatch = useDispatch();
  const { id } = useParams();
  const goToGallery = useNavigate();

  useEffect(() => {
    dispatch(fetchSinglePhoto(id));
  }, [dispatch, id]);

  function renderElements() {
    if (loading) {
      return <Loader />;
    }
    if (singlePhoto) {
      return (
        <div className="photo">
          <Card style={{ padding: "20px 0" }}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
              <Card.Text>{title}</Card.Text>
            </Card.Body>
            <Button onClick={() => goToGallery("/")} variant="primary">
              Назад к галлерее
            </Button>
          </Card>
        </div>
      );
    }
  }
  return <Container>{renderElements()}</Container>;
};
export default SinglePhoto;
