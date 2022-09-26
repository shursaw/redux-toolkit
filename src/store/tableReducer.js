import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk (
    'table/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
                throw new Error('Error');
            }
            const data = response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
)

export const deleteUser = createAsyncThunk (
    'table/deleteUser',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t DELETE user')
            }

            dispatch(DEL({id}));
        } catch (error) {
            return rejectWithValue(error.message); 
        }
    }
)

const setError =  (state,action) => {
    state.status = "rejected";
    state.error = action.payload;
}    

const tableSlice = createSlice({
    name: "table",
    initialState: { 
        names: [],
        status: null,
        error: null
    },
    reducers: {
        DEL(state, action) {
            
            state.names=state.names.filter(item =>  item.id !== action.payload.id.id);
        },
        
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        }, 
        [fetchUsers.fulfilled]: (state,action) => {
            state.status = "resolved";
            state.names = action.payload;
        }, 
        [fetchUsers.rejected]: setError,
        [deleteUser.rejected] : setError
        
        
    }

})

export const {DEL} = tableSlice.actions;
export default tableSlice.reducer;