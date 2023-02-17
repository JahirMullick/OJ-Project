import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        loading: false,
        error: false,
    },
    reducers: {
        startLogin: (state) => {
            state.isFetching = true;
            // state.loading = true;
            state.error = null;
        },
        successfulLogin: (state, action) => {
            state.isFetching = false;
            // state.loading = false;
            state.currentUser = action.payload;
        },
        // failedLogin: (state, action) => { // ChatGPT
        failedLogin: (state) => {
            state.isFetching = false;
            // state.loading = false;
            // state.error = action.payload; //ChatGPT
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = null;
        },
    },
});

export const { startLogin, successfulLogin, failedLogin } = userSlice.actions;
export default userSlice.reducer;