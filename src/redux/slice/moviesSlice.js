import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {genresService, moviesService} from "../../services";

const initialState = {
    movies: [],
    movie: {},
    total_pages: null,
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'moviesSlice/all',
    async (page, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const getId = createAsyncThunk(
    'movieSlice/getId',
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const getGenresMovie = createAsyncThunk(
    'movieSlice/getGenresMovie',
    async ({page, genresId}, thunkAPI) => {
        try {
            const {data} = await genresService.getGenresId(page, genresId);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const search = createAsyncThunk(
    'movieSlice/search',
    async ({page, query}, thunkAPI) => {
        try {
            const {data} = await moviesService.search(page, query);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
            })
            .addCase(getId.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getGenresMovie.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
            })
            .addCase(search.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true
                state.errors = null
            })
            .addMatcher(isFulfilled(), state => {
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(), (state, action) => {
                state.isLoading = false
                state.errors = action.payload
            })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    all,
    getId,
    getGenresMovie,
    search
}

export {
    moviesReducer,
    moviesActions
}