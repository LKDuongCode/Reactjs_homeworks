import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

// hàm lấy data sản phẩm bán
export const fetchSells:any = createAsyncThunk(
    "sells/getSells",
    async ()=>{
        let response = await baseURL.get('/sells')
        return response.data;
    }
)