import { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";

const Main = () => {
  const [key, setKey] = useState("home");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <h3>3</h3>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h3>3</h3>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h3>3</h3>
      </Tab>
    </Tabs>
  );
};
export default Main;
