import { createSlice } from "@reduxjs/toolkit";
import { UserLoginType } from "../../model/interface";

//init
let users : UserLoginType[] = [];

//function
let loginUserReducer = createSlice({
    name:'loginUsers',
    initialState:users,
    reducers:{
        saveUserInfo(state,action){
            [...state,action.payload];
        }
    }
})

export default loginUserReducer.reducer;
export let {saveUserInfo} = loginUserReducer.actions;