/* eslint-disable react/prop-types */


const Card = ({ item, WantToCookbtn }) => {
    const { recipe_name, short_description, ingredients, preparing_time, recipe_image, calories } = item
    
    return (
        <div className="card  bg-base-100 shadow-xl w-[370px] border rounded-2xl">
            <figure className="px-5 pt-5">
                <img className="rounded-2xl" src={recipe_image} alt={recipe_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className="pb-4 border-b">{short_description}</p>
                <p>Ingredients:{ingredients.length}</p>
                {
                    ingredients.slice(0, 3).map(ingredient => (<li key={ingredient.index}>{ingredient} </li>))
                }
                 {ingredients.length > 3 && <p>and more...</p>}
                <div className="flex">
                    <p className="flex"><img className="w-6" src="/src/assets/clock.png" alt="" /> {preparing_time}</p>
                    <p className="flex"><img className="w-6" src="/src/assets/calories.png" alt="" /> {calories}</p>

                </div>
                <div className="card-actions ">
                    <button className="btn bg-[#0BE58A] border-none rounded-full" onClick={() => WantToCookbtn(item)}>Want to cook</button>
                </div>
            </div>
        </div>
    );
};

export default Card;