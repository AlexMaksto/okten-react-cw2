import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres: [],
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'genresService/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresService',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                 const {genres} = action.payload;
                 state.genres = genres;
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

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    all
}

export {
    genresReducer,
    genresActions
}