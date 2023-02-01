import { useState } from "react";

function Categories() {

  const [activeCategories, setCategories] = useState(0)

  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  const onclickCategories = (index)=>{
    setCategories(index)
  }

    return (
      <div className="categories">
        <ul>
          {
            categories.map((pizaName,pizzaIndex)=> (
              <li key={pizzaIndex} onClick={()=> onclickCategories(pizzaIndex)} className={activeCategories == pizzaIndex ? "active" : ""}>{pizaName}</li>
            ))
          }
        </ul>
      </div>
    );
  }

  export default Categories