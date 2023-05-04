import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorImage from '../../../public/not_found.svg';

const ErrorPage = () => {
    return (
        <div className="py-10">
            <div className="text-center">
                <img src={errorImage} alt="" className='w-80 mx-auto' />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                    Sorry, we couldn&apos:t find the page you&apos;re looking for.
                </p>
                <div className="flex items-center justify-center mt-6 gap-x-3">
                    <Link to='/'>
                        <button className="inline-flex items-center rounded-md border border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black hover:bg-orange-500 hover:text-white dark:text-white">
                            <FaArrowLeft className="w-4 h-4 mr-2" />
                            Take me Back
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;