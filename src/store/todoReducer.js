import { createSlice } from "@reduxjs/toolkit"

 
const todoSlice = createSlice({
    name: "todo",
    initialState: { todos: []},
    reducers: {
        ADD_TODO(state, action) {
            //state.todos=[...state.todos, action.payload]
            state.todos.push(action.payload);
        },
         DEL_TODO(state, action) {
             
             
             state.todos = state.todos.filter(item =>item.id !== action.payload);
         },
         TOGGLE_DONE(state,action) {
            const needTask = state.todos.find(item => item.id === action.payload);
            needTask.completed = !needTask.completed;
         }
    }

})

export const {ADD_TODO, DEL_TODO, TOGGLE_DONE} = todoSlice.actions;
export default todoSlice.reducer;