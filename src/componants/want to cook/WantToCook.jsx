
import { useState } from "react";
import WantToCookItems from "../want to cook items/WantToCookItems";



const WantToCook = ({ wantoCookbtn }) => {
    const [currentlyCooking, setCurrentlyCSooking] = useState([]);

    const currentlyCookingbtn = (currentlyCookingitems) => {
        setCurrentlyCSooking(currentlyCookingitems)
        console.log(currentlyCookingitems);
    }
    return (
        <div className="p-10 border rounded-2xl">
            <h1 className="text-2xl font-bold text-center pb-4 border-b">Want to cook: {wantoCookbtn.length}</h1>
            <div className="flex text-left mb-4">
                <span className="w-[5%]"></span>
                <p className="w-[25%]">Name</p>
                <p className="w-[30%]">Time</p>
                <p className="w-[30%]">Calories</p>

            </div>
            {
                wantoCookbtn.map((wantoCookbtnitems, index) => <WantToCookItems wantoCookbtnitems={wantoCookbtnitems} key={wantoCookbtnitems.recipe_id} index={index} currentlyCookingbtn={currentlyCookingbtn}></WantToCookItems>)
            }

            <div className="p-10 border rounded-2xl">
                <h1 className="text-2xl font-bold text-center pb-4 border-b">Want to cook: {currentlyCooking.length}</h1>
                <div className="flex text-left mb-4">
                    <span className="w-[5%]"></span>
                    <p className="w-[25%]">Name</p>
                    <p className="w-[30%]">Time</p>
                    <p className="w-[30%]">Calories</p>
                </div>

               <div className="flex justify-around p-3 bg-slate-100 rounded-xl mb-4">
               <p>{currentlyCooking.recipe_name}</p>
                <p>{currentlyCooking.preparing_time}</p>
                <p>{currentlyCooking.calories}</p>
               </div>
            </div>
        </div>
);
};

export default WantToCook;