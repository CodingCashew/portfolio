import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import theme from "./index";
import "./styles.css";

function App(props) {
  return (
    <div className="App" theme={theme}>
      <div>
        <Navbar className="nav" theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio theme={theme} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
