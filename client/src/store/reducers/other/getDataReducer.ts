import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../../api/Api";

export const fetchData:any = createAsyncThunk(
    "tasksList/fetchData",
    async ()=>{
        let response = await baseURL.get(`/tasksList`);
        return response.data;
    }
)