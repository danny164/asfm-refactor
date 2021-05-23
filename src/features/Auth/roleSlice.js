import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
    name: 'role',
    initialState: '1',
    reducers: {
        updateRole(state, action) {
            state = action.payload;
            return state;
        },
    },
});

const { actions, reducer } = roleSlice;
export const { updateRole } = actions;
export default reducer;
