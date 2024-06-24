import { createSlice } from "@reduxjs/toolkit";
import { SideBar } from "../../model/interface";

//init
let sidebarStatus : SideBar = false;

//function
let sidebarReducer = createSlice({
    name:'sidebar',
    initialState:sidebarStatus,
    reducers:{
        hiddenSidebar5(state){
            return state = false;
        },
        showSidebar5(state){
            return state = true;
        }
    }
})

export default sidebarReducer.reducer;
export let {hiddenSidebar5,showSidebar5} = sidebarReducer.actions;