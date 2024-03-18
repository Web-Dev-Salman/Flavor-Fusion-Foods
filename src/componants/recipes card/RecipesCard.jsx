import { useEffect, useState } from "react";
import Card from "./Card";

const RecipesCard = ({ WantToCookbtn }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(jsonData => setData(jsonData));
    }, []);

    return (
        <div className="flex flex-col md:flex-row flex-wrap gap-2"> 
            {
                data.map(item => (<Card item={item} key={item.recipe_id} WantToCookbtn={WantToCookbtn} />))
            }
        </div>
    );
};

export default RecipesCard;