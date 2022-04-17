import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import List from "../List/List";
import { fetchPhotos } from "../../redux/actions/photosAction";

const Main = () => {
  const [key, setKey] = useState("firstCategory");
  const { photos } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="firstCategory" title="Первая категория">
        <List photos={[...photos.slice(0, 6)]} />
      </Tab>
      <Tab eventKey="secondCategory" title="Вторая категория">
        <List photos={[...photos.slice(6, 12)]} />
      </Tab>
      <Tab eventKey="thirdCategory" title="Третья категория">
        <List photos={[...photos.slice(12, 18)]} />
      </Tab>
      <Tab eventKey="fourthCategory" title="Четвертая категория">
        <List photos={[...photos.slice(18, 24)]} />
      </Tab>
    </Tabs>
  );
};
export default Main;
