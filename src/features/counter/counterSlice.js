import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    value:10,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state)=> {
            state.value += 1;
        },
        decreament: (state)=>{
            state.value -= 1;
        },
        increamentByAmount: (state,action)=>{
            console.log(action);
            state.value+=action.payload
        },
        
    }
})

export const {increament, decreament, increamentByAmount}  = counterSlice.actions

export default counterSlice.reducer