import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Home/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chef')

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/recipes/:id",
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    }
])

export default router;