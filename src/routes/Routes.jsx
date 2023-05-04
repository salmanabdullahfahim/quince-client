import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Home/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://quince-server-salmanabdullahfahim.vercel.app/chef')

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/recipes/:id",
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://quince-server-salmanabdullahfahim.vercel.app/recipes/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;