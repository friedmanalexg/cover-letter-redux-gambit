import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//this thunk is not hooked up yet, dunno if I need it
export const getCurrentLetter = createAsyncThunk('letter/getCurrentLetter', () => {
    return fetch('/showletter')
    .then( res=> res.json() )
})


const initialState = {
    letter_title: "",
    recipient: "",
    company: "",
    job_title: "",
    variable1: "",
    variable2: "",
    user_id: null
};

const letterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers: {
        selectLetter: (state, action) => {
            state.letter = action.payload;
        }
    }
},


)

export default letterSlice.reducer;