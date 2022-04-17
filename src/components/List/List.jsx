import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = (props) => {
  const { photos } = props;
  console.log(photos);
  return (
    <ul className="list">
      {photos.map((item) => (
        <ListItem url={item.url} key={item.id} />
      ))}
    </ul>
  );
};
export default List;
