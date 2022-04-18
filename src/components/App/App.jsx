import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import Main from "../Main/Main";
import About from "../About/About";

const App = () => {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={":id"} element={<SinglePhoto />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
