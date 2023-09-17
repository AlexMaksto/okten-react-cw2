import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer} from "./slice";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer
    }
});

export {
    store
}