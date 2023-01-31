import { useState } from "react";

function Categories() {

  const [activeCategories, setCategories] = useState(0)

  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const idCategories = [0,1,2,3,4,5]
  const onclickCategories = (index)=>{
    setCategories(index)
  }

    return (
      <div className="categories">
        <ul>
          {
            categories.map((pizaName,pizzaIndex)=> (
              <li onClick={()=> onclickCategories(pizzaIndex)} className={activeCategories == pizzaIndex ? "active" : ""}>{pizaName}</li>
            ))
          }
        </ul>
      </div>
    );
  }

  export default Categories