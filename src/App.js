import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";

function App() {
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
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock title="Чешская" price="499" />
          </div>
          {/* <ul className="Pagination_root__uwB0O">
            <li className="previous disabled">
           <a
                className=" "
                tabindex="-1"
                role="button"
                aria-disabled="true"
                aria-label="Previous page"
                rel="prev"
              >
                &lt;
              </a>
            </li>
            <li className="selected">
              <a
                rel="canonical"
                role="button"
                tabindex="-1"
                aria-label="Page 1 is your current page"
                aria-current="page"
              >
                1
              </a>
            </li>
            <li>
              <a rel="next" role="button" tabindex="0" aria-label="Page 2">
                2
              </a>
            </li>
            <li>
              <a role="button" tabindex="0" aria-label="Page 3">
                3
              </a>
            </li>
            <li className="next">
              <a
                className=""
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-label="Next page"
                rel="next"
              >
                &gt;
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;
