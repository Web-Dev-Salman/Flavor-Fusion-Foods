import RecipesCard from "../recipes card/RecipesCard";
import WantToCook from "../want to cook/WantToCook";
import { useState, useEffect } from "react";

const OurRecipes = () => {
    const [wantoCookbtn, setWantToCookbtn] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [showToast, setShowToast] = useState(false);

    const WantToCookBtn = (wantToCook) => {
        const isExist = wantoCookbtn.find((item) => item.recipe_id === wantToCook.recipe_id);
    
        if (!isExist) {
            setWantToCookbtn([...wantoCookbtn, wantToCook]);
        } else {
            setShowToast(true); 
        }
    };

    const removeFromWantToCook = (index) => {
        const updatedWantToCook = [...wantoCookbtn];
        updatedWantToCook.splice(index, 1);
        setWantToCookbtn(updatedWantToCook);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="container mx-auto mt-10">
            <div className="text-center">
                <h1 className="text-3xl">Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="toast toast-top toast-end">
                {showToast && (
                    <div className="alert alert-info">
                        <span>Recipe is already selected.</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center mt-10 gap-2  md:items-start">
                <div className="w-full md:w-1/2">
                    <RecipesCard WantToCookbtn={WantToCookBtn} />
                </div>
                <div className="w-full md:w-1/2">
                    <WantToCook wantoCookbtn={wantoCookbtn} currentlyCooking={currentlyCooking} removeFromWantToCook={removeFromWantToCook} />
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;