import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "./index";
import {ExperienceInterface} from "../contracts/interface";

interface ServicesState {
    experience: ExperienceInterface[],
}

const initialState: ServicesState = {
    experience: [] ,
}

export const Experience = createSlice({
    name: 'services',
    initialState,
    reducers: {
        createExperience: (state, action: PayloadAction<ExperienceInterface[] | []>) => {
            state.experience = action.payload
        },
        editItemExperience: (state, action: PayloadAction<ExperienceInterface>) => {
            console.log(action.payload , 'amin')
            let newState = state.experience.map((element : ExperienceInterface)=>{
                if (element.id === action.payload.id){
                    return  {...element , ...action.payload}
                }else return element
            })
            state.experience = newState;
        },
        deleteItemExperience: (state, action: PayloadAction<number>) => {
            let newState = state.experience?.filter((item: ExperienceInterface) => item.id != action.payload);
            state.experience = newState;
        },
        addItemExperience: (state, action: PayloadAction<ExperienceInterface>) => {
            state.experience.push(action.payload)
        },
    }
});

export const { createExperience , deleteItemExperience , editItemExperience , addItemExperience} = Experience.actions;
export const selectUser = (state: RootState) => state.experience;
export default Experience.reducer;