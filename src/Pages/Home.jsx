import React from "react";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";


const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://63dbd020b8e69785e48bb590.mockapi.io/item")
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setLoading(false);
        });
    }, []);
  
    return(
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading
                ? [...new Array(10)].map((_, index) => <Sceleton key={index} />)
                : items.map((object) => (
                    <PizzaBlock key={object.id} {...object} />
                    ))}
            </div>
          </>
    )
}

export default Home