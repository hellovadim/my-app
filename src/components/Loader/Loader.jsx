import { Spinner, Col, Row } from "react-bootstrap";

export const Loader = () => {
  return (
    <Row>
      <Col xs={6} md={4}>
        <Spinner animation="grow" variant="primary" />
      </Col>
    </Row>
  );
};
export default Loader;
