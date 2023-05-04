import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaThumbsUp } from "react-icons/fa";


const Recipes = () => {

    const chef = useLoaderData();

    const allRecipes = chef.recipes;

    return (
        <div>
            <div className="w-8/12 mx-auto mt-6 text-center flex flex-col md:flex-row items-center bg-gray-100 rounded shadow-xl">
                <div className="w-64 h-64 rounded-md overflow-hidden mx-auto my-4">

                    <img
                        className="w-full h-full object-cover "
                        src={chef?.chefPicture}
                        alt="chef image"
                    />

                </div>
                <div className="w-6/12 mx-auto mb-10">
                    <h2 className="text-5xl my-9 font-bold">{chef?.chefName}</h2>
                    <p><span className="font-bold">About: </span>{chef?.chefBio}</p>
                    <p className="font-semibold mt-4">I have <span className="font-bold">{chef?.numberOfRecipes}</span> recipes</p>
                    <p className="font-semibold">My Experience in this profession <span className="font-bold"> {chef?.yearsOfExperience}</span> years</p>

                    <button className='border  border-black border-2 p-2 flex items-center gap-1 ms-auto mt-3 rounded-xl text-sm'> <FaThumbsUp></FaThumbsUp> {chef?.likes}</button>

                </div>
            </div>

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