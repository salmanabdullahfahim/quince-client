import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const ChefCard = ({ chef }) => {

    const { id, chefName, chefPicture, yearsOfExperience, likes, numberOfRecipes } = chef;



    return (
        <div
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
        >

            <LazyLoad height={250} width={400} offset={300} threshold={0.75} className='LazyLoad'>
                <img src={chefPicture} className='w-full' alt="" />
            </LazyLoad>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{chefName}</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                    Expreience: {yearsOfExperience} years
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                    Number of Recipies: {numberOfRecipes}
                </p>

            </div>
            <div className="px-6 pt-2 pb-6 flex items-center justify-between">

                <Link to={`/recipes/${id}`}>
                    <button className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-orange-400 ">
                        View Recipie
                    </button>
                </Link>
                <button className='border border-black border-1 p-1 flex items-center gap-1 rounded-xl text-sm'> <FaThumbsUp></FaThumbsUp> {likes}</button>
            </div>
        </div>

    );
};

export default ChefCard;