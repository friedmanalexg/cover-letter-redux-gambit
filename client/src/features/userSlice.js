import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', () => {
    return fetch('/me')
    .then( res=> res.json() )
})

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
        isLoading: true,

    },
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        selectUser: (state, action) => {
            
            state.user = action.payload;
        }
    },
    extraReducers: {
        // handle async action types
        [getCurrentUser.pending](state) {
          state.status = "loading";
        },
        [getCurrentUser.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
      },
});


export const {login, logout, selectUser} = userSlice.actions;



export default userSlice.reducer;