import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "./index";
import {SkillInterface} from "../contracts/interface";

interface SkillsState {
    skills: SkillInterface[],
}

const initialState: SkillsState = {
    skills: [],
}

export const Skills = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        createSkills: (state, action: PayloadAction<SkillInterface[] | []>) => {
            state.skills = action.payload
        },
        editItemSkills: (state, action: PayloadAction<SkillInterface>) => {
            let newState = state.skills.map((element: SkillInterface) => {
                if (element.id === action.payload.id) {
                    return {...element, ...action.payload}
                } else return element
            })
            state.skills = newState;
        },
        deleteItemSkills: (state, action: PayloadAction<number>) => {
            let newState = state.skills?.filter((item: SkillInterface) => item.id != action.payload);
            state.skills = newState;
        },
        addItemSkills: (state, action: PayloadAction<SkillInterface>) => {
            state.skills.push(action.payload)
        },
    }
});

export const {createSkills, deleteItemSkills, editItemSkills, addItemSkills} = Skills.actions;
export const selectUser = (state: RootState) => state.skills;
export default Skills.reducer;