import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = (props) => {
  const { photos } = props;

  return (
    <ul className="list">
      {photos.map((item) => (
        <ListItem url={item.url} id={item.id} key={item.id} />
      ))}
    </ul>
  );
};
export default List;
