import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";
import { Cart } from "../../model/modelType";

//hàm thêm vào mảng carts
export const addToCarts:any = createAsyncThunk(
    "carts/addToCarts",
   async (sell:Cart)=>{
        let response = await baseURL.post('/carts',sell);
        return response.data;
    }
)