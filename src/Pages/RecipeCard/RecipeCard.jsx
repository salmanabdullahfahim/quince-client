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
        <div className="card lg:card-side bg-base-100 shadow-xl my-5 w-11/12 mx-auto">
            <figure className="w-6/12">
                <img src={photo} alt="recipe" />
            </figure>
            <div className="card-body w-6/12">
                <h2 className="card-title text-2xl">{name}</h2>
                <div>
                    <h3 className="font-bold text-xl my-4">Ingredients:</h3>
                    {ingredients ? (
                        <>
                            {" "}
                            {ingredients.map((i) => (
                                <p>{i}</p>
                            ))}{" "}
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <p>
                    <span className="text-xl font-bold">Cooking Method:</span>{" "}
                    {cookingMethod}
                </p>
                <div className="card-actions justify-end items-center">

                    <div className="mr-auto flex items-center mt-5"><Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}</div>

                    <button onClick={handleFavourite} disabled={isDisabled} className=" rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-orange-400">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;

