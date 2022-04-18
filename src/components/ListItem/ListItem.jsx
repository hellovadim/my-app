import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import "./ListItem.scss";

const ListItem = (props) => {
  const { id, url } = props;
  const [mouseUp, setMouseup] = useState(false);

  return (
    <li className="image">
      <Card
        onMouseEnter={() => setMouseup(!mouseUp)}
        onMouseLeave={() => setMouseup(!mouseUp)}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={url} />
        <Button
          className={mouseUp ? "image__btn active" : "image__btn"}
          variant="primary"
        >
          <Link to={`${id}`}>Подробнее</Link>
        </Button>
      </Card>
    </li>
  );
};
export default ListItem;
