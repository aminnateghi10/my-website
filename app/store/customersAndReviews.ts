import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {InterfaceItemCustomersAndReviews} from "../contracts/customersAndReviews";


interface CustomersAndReviewsState {
    customersAndReviews?: any,
}

const initialState: CustomersAndReviewsState = {
    customersAndReviews: undefined ,
}
export const CustomersAndReviews = createSlice({
    name: 'customersAndReviews',
    initialState,
    reducers: {
        createCustomersAndReviews: (state, action: PayloadAction<InterfaceItemCustomersAndReviews | undefined>) => {
            state.customersAndReviews = action.payload
        },
        editItemCustomersAndReviews: (state, action: PayloadAction<InterfaceItemCustomersAndReviews>) => {
            let newState = state.customersAndReviews.map((element : InterfaceItemCustomersAndReviews)=>{
                if (element.id === action.payload.id){
                    return  {...element , ...action.payload}
                }else return element
            })
            state.customersAndReviews = newState;
        },
        deleteItemCustomersAndReviews: (state, action: PayloadAction<number>) => {
            let newState = state.customersAndReviews?.filter((item: InterfaceItemCustomersAndReviews) => item.id != action.payload);
            state.customersAndReviews = newState;
        },
        addItemCustomersAndReviews: (state, action: PayloadAction<any>) => {
            state.customersAndReviews.push(action.payload)
        },
    }
});

export const { createCustomersAndReviews , deleteItemCustomersAndReviews , editItemCustomersAndReviews , addItemCustomersAndReviews} = CustomersAndReviews.actions;

export const selectUser = (state: RootState) => state.customersAndReviews;

export default CustomersAndReviews.reducer;