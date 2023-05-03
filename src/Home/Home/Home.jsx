import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Stats from '../Stats/Stats';
import Feedback from '../Feedback/Feedback';
import ReactTypingEffect from 'react-typing-effect';


const Home = () => {


    const chefs = useLoaderData();

    return (
        <div>
            <div className="relative isolate pl-6 lg:pl-8 bg-white flex h-screen gap-4 overflow-hidden mb-12 mt-1 p-4">
                <div className="max-w-2xl py-32 sm:py-48 lg:py-32">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
                           
                            Experience Culinary Excellence. 
                                <ReactTypingEffect text="Find Your Perfect Chef !" speed={80} />
                          
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Elevate Your Culinary Experience. Find Your Perfect Chef Today.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white"
                            >
                                Hire a Chef Today
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        className="max-h-full w-full object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="image"
                    />
                </div>
            </div>

            <div>
                <h2 className='text-center text-4xl font-bold'>Our Chefs</h2>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">

                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>

            <div>
                <Stats></Stats>
            </div>

            <div className='mt-6 mb-3'>
                <h2 className='text-center text-4xl font-semibold'>Client Feedback</h2>
            </div>
            <div className='px-8 shadow-xl rounded mx-8 mb-12'>
                <Feedback></Feedback>
            </div>
        </div>
    );
};

export default Home;