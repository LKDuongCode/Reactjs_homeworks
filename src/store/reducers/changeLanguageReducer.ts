import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../../model/interface";

//init
let languages:Language = '';

//function
const changeLanguageReducer = createSlice({
    name:'languages',
    initialState:languages,
    reducers:{
        changeLanguage6(state,action){
           action.payload === 'English' ? state =action.payload :action.payload === 'Vietnamese' ? state =action.payload :action.payload === 'Bảnh_language' ? state =action.payload :state =action.payload;
            return state;
        }
    }
})

export default changeLanguageReducer.reducer;
export const {changeLanguage6} = changeLanguageReducer.actions;