import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    list:[],
    status: "idle",
    error: null
};

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (payload) => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c0a6a2a0d2d6b3a6a3e0c0e6d9d9e0a&language=en-US&page=1");
        const data = await response.json();
        return data.results;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.status = "loading";
        });
        // Add reducers for additional action types here, and handle fulfilled state as needed
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
          // Add user to the state array
          state.list.push(action.payload);
        });
        // Add reducers for additional action types here, and handle rejected state as needed
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
  },
});

export default moviesSlice.reducer;
export const selectAllMovies = state => state.movies.list;