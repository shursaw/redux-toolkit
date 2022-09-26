import { createSlice } from "@reduxjs/toolkit"

 
const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0},
    reducers: {
        ADD(state, action) {
            state.count=state.count + action.payload;
        },
        DEC(state, action) {
            state.count=state.count - action.payload;
        }
    }

})

export const {ADD, DEC} = counterSlice.actions;
export default counterSlice.reducer;
