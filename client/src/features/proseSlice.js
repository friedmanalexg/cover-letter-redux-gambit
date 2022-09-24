export const getCurrentLetter = createAsyncThunk('letter/getCurrentLetter', () => {
    return fetch('/showprose')
    .then( res=> res.json() )
})

const initialState = {
    block_title: "",
    block_type: "",
    prose_content: "",
    user_id: null

};

const proseSlice = createSlice({
    name: 'prose',
    initialState,
    reducers: {
        selectProse: (state, action) => {
            state.prose = action.payload;
        }
    }
})