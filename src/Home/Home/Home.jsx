import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const props = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-50px)' },
        config: { duration: 1000 },
    });

    return (
        <div className="relative isolate pl-6 lg:pl-8 bg-white flex h-screen overflow-hidden mb-12 mt-1 p-4">
            <div className="max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="text-left">
                    <animated.h1
                        style={props}
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                    >
                        Experience Culinary Excellence. Find Your Perfect Chef Today!
                    </animated.h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Elevate Your Culinary Experience.Discover the Best Chefs. Find Your Perfect Chef Today.
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
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt="image"
                />
            </div>
        </div>
    );
};

export default Home;