import { useState } from "react";

function Categories() {

  const [activeCategories, setCategories] = useState(0)

  const onclickCategories = (index)=>{
    setCategories(index)
  }

    return (
      <div className="categories">
        <ul>
          <li onClick={()=> {onclickCategories(0)}} className={activeCategories == 0 ? "active" : ""}>Все</li>
          <li onClick={()=> {onclickCategories(1)}} className={activeCategories == 1 ? "active" : ""}>Мясные</li>
          <li onClick={()=> {onclickCategories(2)}} className={activeCategories == 2 ? "active" : ""}>Вегетарианская</li>
          <li onClick={()=> {onclickCategories(3)}} className={activeCategories == 3 ? "active" : ""}>Гриль</li>
          <li onClick={()=> {onclickCategories(4)}} className={activeCategories == 4 ? "active" : ""}>Острые</li>
          <li onClick={()=> {onclickCategories(5)}} className={activeCategories == 5 ? "active" : ""}>Закрытые</li>
        </ul>
      </div>
    );
  }

  export default Categories