import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";

import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://63dbd020b8e69785e48bb590.mockapi.io/item")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((object) => (
              <PizzaBlock key={object.id} {...object} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
