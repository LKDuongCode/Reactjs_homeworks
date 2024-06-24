import { createSlice } from "@reduxjs/toolkit";
import { DisplayMode } from "../../model/interface";

//gồm list, double-list, grid.

// init
let displayMode : DisplayMode = '';

//function 
let changeDisplayModeReducer = createSlice({
    name:'displayMode',
    initialState:displayMode,
    reducers:{
        changeDisplay4List(state){
            return state = 'list';
        },
        changeDisplay4Grid(state){
            return state = 'grid';
        },
        changeDisplay4Dlist(state){
            return state = 'double-list';
        }
    }
})

export default changeDisplayModeReducer.reducer;
export let {changeDisplay4Dlist,changeDisplay4Grid,changeDisplay4List} = changeDisplayModeReducer.actions;