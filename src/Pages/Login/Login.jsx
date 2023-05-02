import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
               
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="relative">
            <div className="my-4 flex items-center justify-center">
                <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <div className="flex items-center justify-center rounded-md bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don&apos;t have an account?{' '}
                                <Link to='/register'
                                    href="#"
                                    title=""
                                    className="font-medium text-orange-600 transition-all duration-200 hover:text-orange-700 hover:underline focus:text-orange-700"
                                >
                                    Create a free account
                                </Link>
                            </p>

                            <form onSubmit={handleLogin} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="email"
                                                placeholder="Email" name='email'
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>

                                            <Link 
                                                href="#"
                                                title=""
                                                className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline focus:text-orange-700"
                                            >
                                                {' '}
                                                Forgot password?{' '}
                                            </Link>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="password"
                                                placeholder="Password" name='password'
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-orange-400"
                                        >
                                            Login
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
                                <button 
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>

                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6 text-black"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 0C5.373 0 0 5.373 0 12c0 5.275 3.438 9.732 8.205 11.315.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.082-.729.082-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.81 1.303 3.496.997.108-.776.417-1.303.76-1.603-2.665-.307-5.466-1.332-5.466-5.93 0-1.312.465-2.386 1.235-3.223-.124-.306-.535-1.527.117-3.18 0 0 1.007-.322 3.3 1.23a11.53 11.53 0 0 1 3.002-.404c1.02 0 2.042.137 3.002.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.18.77.837 1.235 1.91 1.235 3.223 0 4.61-2.805 5.62-5.478 5.92.43.372.817 1.103.817 2.223 0 1.607-.015 2.903-.015 3.297 0 .315.215.688.825.574C20.565 21.73 24 17.274 24 12c0-6.627-5.373-12-12-12"
                                            />
                                        </svg>
                                    </div>
                                    Sign in with Github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;