import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./counterReducer";
import tableReducer from "./tableReducer";
import todoReducer from "./todoReducer";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        table: tableReducer
    },
});

export {store}