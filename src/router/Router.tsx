import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../pages/movies";
import { SessionsPage } from "../pages/sessions";
import MainLayout from "./MainLayout";
import { WelcomePage } from "../pages/welcome";

const Router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            { path: "/movies", element: <MoviesPage/> },
            { path: "/sessions", element: <SessionsPage/> },
            { path: "/", element: <WelcomePage/> }
        ]
    }
]);

export default Router;
