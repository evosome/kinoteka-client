import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../pages/movies";
import { SessionsPage } from "../pages/sessions";
import MainLayout from "./MainLayout";
import { WelcomePage } from "../pages/welcome";
import { MovieDetailsPage } from "../pages/movie-details/";
import ErrorPage from "@app/pages/error/ErrorPage";
import { UserDetails } from "@app/pages/user-details";
import { InfoPage } from "@app/pages/info";

const Router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/movies",
                children: [
                    {
                        index: true,
                        element: <MoviesPage/>,
                        errorElement: <ErrorPage/>
                    },
                    {
                        path: ":id",
                        element: <MovieDetailsPage/>
                    }
                ]
            },
            { path: "/movies:id", element: <MovieDetailsPage /> },
            { path: "/user", element: <UserDetails/> },
            { path: "/sessions", element: <SessionsPage /> },
            { path: "/", element: <WelcomePage />, errorElement: <ErrorPage/> },
            { path: "/info", element: <InfoPage/> }
        ],
    }
]);

export default Router;
