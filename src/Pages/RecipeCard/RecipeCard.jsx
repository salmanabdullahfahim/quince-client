import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const { name, rating, ingredients, photo, cookingMethod } = recipe;
    const handleFavourite = () => {
        toast.success('Added to favourite!');
        setIsDisabled(true);
    }
    return (
        <>
            <div className="card card-compact w-full bg-base-100 overflow-hidden shadow-xl">
                <figure>
                    <img className="h-80 w-full object-cover" src={photo} alt="recipe" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    

                    <div >
                        <div>
                            <h3 className="font-bold text-xl my-4">Ingredients:</h3>
                            {ingredients ? (
                                <>
                                    {
                                        ingredients.map((i) => (
                                                <p>{i}</p>
                                     ))}
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                        <p>
                            <span className="text-xl font-bold">Cooking Methode:</span>
                            {cookingMethod}
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-auto">
                        <button
                            onClick={handleFavourite}
                            disabled={isDisabled}
                            className="btn btn-primary"
                        >
                            Favourite
                        </button>
                        <div className="mr-auto flex items-center my-auto">
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            ></Rating>
                            {rating}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default RecipeCard;

