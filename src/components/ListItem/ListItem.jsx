import { Card, Button } from "react-bootstrap";
import "./ListItem.scss";

const ListItem = (props) => {
  const { id, url } = props;
  return (
    <li>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Button variant="primary">Подробнее</Button>
      </Card>
    </li>
  );
};
export default ListItem;
