
const WantToCookItems = ({wantoCookbtnitems, index, currentlyCookingbtn}) => {
    const {recipe_name, preparing_time, calories} = wantoCookbtnitems;
    return (
        <div className="flex justify-around p-3 bg-slate-100 rounded-xl mb-4">
             <p>{index + 1}</p>
            <h1 className="w-1/4">{recipe_name}</h1>
            <h1 className="w-1/4">{preparing_time}</h1>
            <h1 className="w-1/4">{calories}</h1>
            <button className="btn bg-[#0BE58A] border-none rounded-full" onClick={() => currentlyCookingbtn(wantoCookbtnitems)}>Preparing</button>
        </div>
    );
};


export default WantToCookItems;