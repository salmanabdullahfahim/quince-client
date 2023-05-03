import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {

    const chef = useLoaderData();

    const allRecipes = chef.recipes;

    return (
        <div>
            <div className="w-8/12 mx-auto text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mx-auto my-4">
                    <img
                        className="w-full h-full object-cover"
                        src={chef?.chefPicture}
                        alt="chef image"
                    />
                </div>
                <div className="w-6/12 mx-auto mb-10">
                    <h2 className="text-5xl my-9 font-bold">{chef?.chefName}</h2>
                    <p><span className="font-bold">About: </span>{chef?.chefBio}</p>
                    <p className="font-semibold mt-4">I have <span className="font-bold">{chef?.numberOfRecipes}</span> recipes</p>
                    <p className="font-semibold">My Experience in this profession <span className="font-bold"> {chef?.yearsOfExperience}</span> years</p>
                </div>
            </div>
            <hr />
            <div>
                <h2 className="font-bold text-4xl text-center mt-10">My Recipes</h2>
                {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
                ))}
            </div>
        </div>
    );
};

export default Recipes;