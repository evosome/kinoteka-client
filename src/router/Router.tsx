import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../pages/movies";
import { SessionsPage } from "../pages/sessions";
import MainLayout from "./MainLayout";
import { WelcomePage } from "../pages/welcome";
import { MovieDetailsPage } from "../pages/movie-details/";
import ErrorPage from "@app/pages/error/ErrorPage";

const Router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/movies",
                children: [
                    {
                        index: true,
                        element: <MoviesPage/>
                    },
                    {
                        path: ":id",
                        element: <MovieDetailsPage/>
                    }
                ]
            },
            { path: "/movies:id", element: <MovieDetailsPage /> },
            { path: "/sessions", element: <SessionsPage /> },
            { path: "/", element: <WelcomePage />, errorElement: <ErrorPage/> }
        ],
    }
]);

export default Router;
