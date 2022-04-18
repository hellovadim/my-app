import { Spinner } from "react-bootstrap";
import "./Loader.scss";

export const Loader = () => {
  return <Spinner animation="grow" variant="primary" className="loader" />;
};
export default Loader;
