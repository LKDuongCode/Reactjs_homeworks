import { createSlice } from "@reduxjs/toolkit";
import {  StateSellType } from "../../model/modelType";
import { fetchSells } from "../../service/sellService/getSells.service";

//init
let initSells :StateSellType = {
    loading:false,
    data:[],
    error:null,
}

//toàn bộ hàm xử lí đều được lấy từ folder service

//function xử lí
const sellsReducer = createSlice({
    name:'sells',
    initialState:initSells,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSells.pending,(state,action)=>{
            //trạng thái chờ lấy dữ liệu
        })
        .addCase(fetchSells.fulfilled,(state,action)=>{
            // trạng thái lấy dữ liệu thành công
            state.data = action.payload; //action.payload được trả về từ hàm xử lí fetchSells.
        })
        .addCase(fetchSells.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
        })
    }
})

export default sellsReducer.reducer;

