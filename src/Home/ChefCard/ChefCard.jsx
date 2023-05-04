import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, yearsOfExperience, likes, numberOfRecipes } = chef;

    const [blurDuration, setBlurDuration] = useState('100ms');

    useEffect(() => {
        setBlurDuration('3000ms'); // change the duration to 1000ms
    }, []);
    return (
        <div
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
        >
            <LazyLoadImage effect='blur' className="w-full" src={chefPicture} alt="Mountain" duration={blurDuration} />
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