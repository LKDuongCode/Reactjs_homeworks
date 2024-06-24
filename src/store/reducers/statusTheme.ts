import {  createSlice } from "@reduxjs/toolkit";
import { StatusTheme } from "../../model/interface";

//init
let theme: StatusTheme = true;

//function
let statusThemeReducer = createSlice({
    name:'theme',
    initialState:theme,
    reducers:{
        changeUI3(state){

            return state = !state;
        }

    }
})

export default statusThemeReducer.reducer;
export let {changeUI3} = statusThemeReducer.actions;