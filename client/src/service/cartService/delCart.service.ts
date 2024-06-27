import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm xóa cart
export const removeFromCarts :any = createAsyncThunk(
    "carts/removeFromCarts",
    async(id:number)=>{
        let response = await baseURL.delete(`/carts/${id}`);
        return id;
    }
)