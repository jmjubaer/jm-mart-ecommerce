import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default routes;