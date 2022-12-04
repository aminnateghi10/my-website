import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {InterfaceItemExperience} from "../contracts/experience";


interface ServicesState {
    experience?: any,
}

const initialState: ServicesState = {
    experience: undefined ,
}
export const Experience = createSlice({
    name: 'services',
    initialState,
    reducers: {
        createExperience: (state, action: PayloadAction<InterfaceItemExperience | undefined>) => {
            state.experience = action.payload
        },
        editItemExperience: (state, action: PayloadAction<InterfaceItemExperience>) => {
            console.log(action.payload , 'amin')
            let newState = state.experience.map((element : InterfaceItemExperience)=>{
                if (element.id === action.payload.id){
                    return  {...element , ...action.payload}
                }else return element
            })
            state.experience = newState;
        },
        deleteItemExperience: (state, action: PayloadAction<number>) => {
            let newState = state.experience?.filter((item: InterfaceItemExperience) => item.id != action.payload);
            state.experience = newState;
        },
        addItemExperience: (state, action: PayloadAction<any>) => {
            // state.experience.push(action.payload)
        },
    }
});

export const { createExperience , deleteItemExperience , editItemExperience , addItemExperience} = Experience.actions;

export const selectUser = (state: RootState) => state.experience;

export default Experience.reducer;