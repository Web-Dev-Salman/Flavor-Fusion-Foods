import { useState } from "react";
import RecipesCard from "../recipes card/RecipesCard";
import WantToCook from "../want to cook/WantToCook";

const OurRecipes = () => {
    const [wantoCookbtn, setWantToCookbtn] = useState([]);

    const WantToCookBtn = (wantToCook) => {
        const isExist = wantoCookbtn.find((item) => item.recipe_id === wantToCook.recipe_id);
    
        if (!isExist) {
            setWantToCookbtn([...wantoCookbtn, wantToCook]);
        } else {
            return (
                <div className="absolute top-0 right-0 bg-red-500">
                    <h1>hello</h1>
                </div>
            );
        }
    };
    return (
        <div className="container mx-auto mt-10">
            <div className="text-center">
                <h1 className="text-3xl">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex justify-center mt-10 gap-2">
                <div className="w-1/2">
                    <RecipesCard WantToCookbtn={WantToCookBtn} ></RecipesCard>
                </div>
                <div className="w-1/2">
                    <WantToCook wantoCookbtn={wantoCookbtn}></WantToCook>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;