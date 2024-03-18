import { useState } from "react";
import WantToCookItems from "../want to cook items/WantToCookItems";

const WantToCook = ({ wantoCookbtn, removeFromWantToCook }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const currentlyCookingbtn = (currentlyCookingitems) => {
        setCurrentlyCooking([...currentlyCooking, currentlyCookingitems]);
    };

    const calculateTotalData = () => {
        let totalTime = 0;
        let totalCalories = 0;
        currentlyCooking.forEach((item) => {
            totalTime += parseInt(item.preparing_time);
            totalCalories += parseInt(item.calories);
        });
        return { totalTime, totalCalories };
    };

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
                wantoCookbtn.map((wantoCookbtnitems, index) => <WantToCookItems wantoCookbtnitems={wantoCookbtnitems} key={wantoCookbtnitems.recipe_id} index={index} currentlyCookingbtn={currentlyCookingbtn} removeFromWantToCook={removeFromWantToCook} />)
            }
            <div className="p-10 border rounded-2xl">
                <h1 className="text-2xl font-bold text-center pb-4 border-b">
                    Currently Cooking: {currentlyCooking.length}
                </h1>
                <div className="flex text-left mb-4">
                    <span className="w-[5%]"></span>
                    <p className="w-[25%]">Name</p>
                    <p className="w-[30%]">Time</p>
                    <p className="w-[30%]">Calories</p>
                </div>
                {currentlyCooking.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-around p-3 bg-slate-100 rounded-xl mb-4"
                    >
                        <p>{index + 1}</p>
                        <h1 className="w-1/4">{item.recipe_name}</h1>
                        <h1 className="w-1/4">{item.preparing_time}</h1>
                        <h1 className="w-1/4">{item.calories}</h1>
                    </div>
                ))}
                <div className="flex justify-end">
                    <p className="w-1/3">Total Time: {calculateTotalData().totalTime} minutes</p>
                    <p className="w-1/3">Total Calories: {calculateTotalData().totalCalories}</p>
                </div>
            </div>
        </div>
    );
};

export default WantToCook;