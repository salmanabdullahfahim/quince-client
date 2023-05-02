import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="relative">
            <div className="my-4 flex items-center justify-center">
                <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign Up</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Already have an account?{' '}
                                <Link to='/login'
                                    href="#"
                                    title=""
                                    className="font-medium text-orange-600 transition-all duration-200 hover:text-orange-700 hover:underline focus:text-orange-700"
                                >
                                    Sign In
                                </Link>
                            </p>

                            <form className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Full Name{' '}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                placeholder="Enter Your Full Name"
                                                id="name" name='name' required
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Photo Url{' '}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                placeholder="Enter Your Photo Url"
                                                id="photo" name='photo' required
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="email"
                                                placeholder="Enter Your Email"
                                                id="email" name='email' required
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                id="password" name='password' required
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-orange-400"
                                        >
                                            Sign Up
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="ml-2 h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">

                                <p>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Read our <span className="capitalize text-orange-600">privacy policy</span> and{' '}
                                        <span className="capitalize text-orange-600">terms of service</span> to learn
                                        more
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;