const WantToCookItems = ({ wantoCookbtnitems, index, currentlyCookingbtn, removeFromWantToCook }) => {
    const { recipe_name, preparing_time, calories } = wantoCookbtnitems;

    const handlePreparing = () => {
        currentlyCookingbtn(wantoCookbtnitems);
        removeFromWantToCook(index);
    };

    return (
        <div className="flex justify-around p-3 bg-slate-100 rounded-xl mb-4">
            <p>{index + 1}</p>
            <h1 className="w-1/4">{recipe_name}</h1>
            <h1 className="w-1/4">{preparing_time}</h1>
            <h1 className="w-1/4">{calories}</h1>
            <button className="btn bg-[#0BE58A] border-none rounded-full" onClick={handlePreparing}>Preparing</button>
        </div>
    );
};

export default WantToCookItems;