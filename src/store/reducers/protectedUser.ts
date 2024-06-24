import { createSlice } from "@reduxjs/toolkit";
import { ProtectedUserType } from "../../model/interface";

//init
let protectedList: ProtectedUserType[] = [
  {
    id: 1,
    name: 'David',
    status: false,
  },
  {
    id: 2,
    name: 'Linda',
    status: false,
  },
  {
    id: 3,
    name: 'Sam',
    status: false,
  },
];

//function
let protectedUserReducer = createSlice({
  name: 'protectedUser',
  initialState: protectedList,
  reducers: {
    controlProtect(state, action) {
      state.map((item:ProtectedUserType)=>{
        if(item.id === action.payload){
            item.status = !item.status;
        }
      })
      
    }
  }
});

export default protectedUserReducer.reducer;
export let { controlProtect } = protectedUserReducer.actions;
