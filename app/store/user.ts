import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "./index";

interface UserState {
    user: string[],
}

const initialState: UserState = {
    user: [] ,
}
export const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<string[] | []>) => {
            state.user = action.payload
        }
    }
})

export const { updateUser} = User.actions;
export const selectUser = (state: RootState) => state.user;
export default User.reducer;