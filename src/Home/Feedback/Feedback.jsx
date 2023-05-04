import React from 'react';

const Feedback = () => {
    return (
        <section className="container mx-auto px-10 md:px-0 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div>
                        <div className="relative flex-shrink-0 w-48 min-h-min">
                            <img
                                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt=""
                            />
                        </div>
                        <div className="mt-8">
                            <blockquote>
                                <p className="text-xl text-black dark:text-white">
                                    “I had a fantastic experience using a chef hunting website to find a personal chef. I found the perfect chef for my family, who has been creating delicious and healthy meals that fit our preferences and dietary needs.”
                                </p>
                            </blockquote>
                            <p className="text-lg font-semibold text-black dark:text-white mt-7">
                            Kerem
                            </p>
                            <p className="mt-1 text-base text-gray-600">
                                Founder, Silver Spoon
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div>
                        <div className="relative flex-shrink-0 w-48 min-h-min">
                            <img
                                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                alt="Ketty Perry"
                            />
                        </div>
                        <div className="mt-8">
                            <blockquote>
                                <p className="text-xl text-black dark:text-white">
                                    “I was impressed with the chef hunting website's vast selection of talented chefs. The platform's communication tools made it easy to connect with chefs and discuss meal plans, dietary restrictions, and pricing. Thanks to this website.”
                                </p>
                            </blockquote>
                            <p className="text-lg font-semibold text-black dark:text-white mt-7">

                                Betül Özkaynak
                            </p>
                            <p className="mt-1 text-base text-gray-600">
                                Owner, Rannaghor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;