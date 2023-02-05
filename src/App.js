import Header from "./components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Card from "./Pages/Card";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
