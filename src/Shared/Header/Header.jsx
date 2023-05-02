import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='shadow-xl rounded-lg'>
            <nav className="relative px-4 py-4 flex justify-between items-center">
                <div className='flex items-center gap-2'>
                

                    <Link className="text-3xl font-bold leading-none" to='/'>
                        Quince
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <Link
                            className=" text-orange-500 hover:text-orange-600 dark:text-gray-300"
                            to='/'
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link
                            className=" text-gray-500 hover:text-orange-600 dark:text-gray-300"
                            to='/blog'
                        >
                            Blog
                        </Link>
                    </li>

                </ul>
                <div className="space-x-2 hidden lg:block">
                    {
                        user ? <button onClick={handleLogout} className="rounded-md border border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-orange-600 hover:bg-orange-400 ">
                            Logout
                        </button> : <Link to='/login'>
                            <button className="rounded-md border border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-orange-600 hover:bg-orange-400 ">
                                Login
                            </button>
                        </Link>
                    }
                    {
                        !user && <Link to='/register'>
                            <button className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-orange-400 ">
                                SignUp
                            </button>
                        </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;