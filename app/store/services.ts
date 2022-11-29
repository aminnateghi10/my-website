import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {ServiceInterface} from "../contracts/services";


interface ServicesState {
    services?: any,
}

const initialState: ServicesState = {
    services: undefined ,
}
export const Services = createSlice({
    name: 'services',
    initialState,
    reducers: {
        createServices: (state, action: PayloadAction<ServiceInterface | undefined>) => {
            state.services = action.payload
        },
        editItemServices: (state, action: PayloadAction<ServiceInterface>) => {
            let newState = state.services.map((element : ServiceInterface)=>{
                if (element.id === action.payload.id){
                    return  {...element , ...action.payload}
                }else return element
            })
            state.services = newState;
        },
        deleteItemServices: (state, action: PayloadAction<number>) => {
            let newState = state.services?.filter((item: ServiceInterface) => item.id != action.payload);
            state.services = newState;
        },
        addItemServices: (state, action: PayloadAction<any>) => {
            state.services.push(action.payload)
        },
    }
});

export const { createServices , deleteItemServices , editItemServices , addItemServices} = Services.actions;

export const selectUser = (state: RootState) => state.skills;

export default Services.reducer;