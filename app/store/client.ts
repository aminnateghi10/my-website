import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "./index";
import {ClientInterface} from "../components/shared/interface";

interface ClientState {
    client: ClientInterface[]| [],
}

const initialState: ClientState = {
    client: [] ,
}
export const Client = createSlice({
    name: 'client',
    initialState,
    reducers: {
        createClient: (state, action: PayloadAction<ClientInterface[]>) => {
            state.client = action.payload
        },
        editItemClient: (state, action: PayloadAction<ClientInterface>) => {
            let newState = state.client?.map((element : ClientInterface)=>{
                if (element.id === action.payload.id){
                    return  {...element , ...action.payload}
                }else return element
            })
            state.client = newState;
        },
        deleteItemClient: (state, action: PayloadAction<number>) => {
            let newState = state.client?.filter((item: ClientInterface) => item.id != action.payload);
            state.client = newState;
        },
        addItemClient: (state, action: PayloadAction<ClientInterface>) => {
            state.client.push(action.payload)
        },
    }
});

export const { createClient , deleteItemClient , editItemClient , addItemClient} = Client.actions;

export const selectUser = (state: RootState) => state.client;

export default Client.reducer;