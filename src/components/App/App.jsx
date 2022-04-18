import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import Main from "../Main/Main";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={":id"} element={<SinglePhoto />} />
      </Routes>
    </Router>
  );
};

export default App;
