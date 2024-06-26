import { createSlice } from "@reduxjs/toolkit";
import { StateType, Task } from "../../model/interface";
import { fetchData } from "./other/getDataReducer";
import { addData } from "./other/addTaskReducer";

//init
let initialState: StateType = {
  loading: false,
  data: null,
  error: null,
};
//lấy mảng task bên json => ok, trong file other.

// tạo function quản lí
const taskReducer = createSlice({
  name: "tasksList",
  initialState,
  reducers: {}, //khôgn dùng nữa
  // sử dụng extraReducer để quản lí bất đồng bộ
  extraReducers: (builder) => {
    builder
      //thêm trường hợp xảy ra
      .addCase(fetchData.pending, (state, action) => {
        //trạng thái chờ lẫy dữ liệu.
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        //trạng thái lấy dữ liệu thành công, ta có thể xử lí dữ liệu tại đây.     
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        //trạng thái lấy dữ liệu thất bại.
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addData.fulfilled, (state,action)=>{
        //trạng thái thêm mới
        state.loading = false;
        state.data = [...state.data,action.payload];
      })
  },
});
//xuất hàm
export default taskReducer.reducer;
