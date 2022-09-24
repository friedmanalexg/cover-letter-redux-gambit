import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    letter_id: null,
    prose_block_id: null
};

const letterBlockSlice = createSlice({
    name: 'letter_block',
    initialState,
    reducers: {
        selectP
    }
})

export default letterBlockSlice.reducer;