import { createSlice } from "@reduxjs/toolkit";
import { ArrRandom } from "../../model/interface";

//init
let nums: ArrRandom = [];

//reducer
let randomNumReducer = createSlice({
    name:'nums',
    initialState: nums,
    reducers:{
        randomNumber(state,action){
            return [...state,action.payload];
        },
        resetRandom(state){
      
            return state = [] ;
        }
    }
})

export default randomNumReducer.reducer
export let {randomNumber, resetRandom} = randomNumReducer.actions