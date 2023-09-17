import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenreListMoviePage, GenresPage, MoviesListCardPage, MoviesPage, NotFoundPage, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>,
                children: [
                    {
                        path: ':page',
                        element: <MoviesPage/>
                    }
                ]
            },
            {
                path: 'movie/:id',
                element: <MoviesListCardPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>,
            },
            {
                path: 'genre/:genresId',
                element: <GenreListMoviePage/>,
                children: [
                    {
                        path: ':page',
                        element: <GenreListMoviePage/>
                    }
                ]
            },
            {
                path: 'search',
                element: <SearchPage/>,
                children: [
                    {
                        path: ':page/:query',
                        element: <SearchPage/>
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {
    router
}