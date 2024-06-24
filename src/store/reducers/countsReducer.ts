import { createSlice } from "@reduxjs/toolkit";
import { Count } from "../../model/interface";

// init
let count:Count = 0;

//reducer
let countReducer = createSlice({
    name:'count',
    initialState:count,
    reducers:{
        //tăng
        increase(state,action){
            return state + action.payload
        },
        //giamr
        decrease(state,action){
            return state - action.payload
        },
        //reset bằng 0
        reset(state){
            return state = 0;
        }
    }
})

//xuất
export default countReducer.reducer;
export let {reset, decrease, increase} = countReducer.actions
