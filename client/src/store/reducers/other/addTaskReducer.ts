import { createAsyncThunk } from "@reduxjs/toolkit";

import baseURL from "../../../api/Api";

export const addData:any = createAsyncThunk(
    "tasksList/addData",
    async (newTask)=>{
        let response = await baseURL.post('/tasksList',newTask);
        return response.data;
    }
)