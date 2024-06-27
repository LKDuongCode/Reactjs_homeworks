import { createSlice } from "@reduxjs/toolkit"
import { fetchCarts } from "../../service/cartService/getCart.service"
import { StateCartType } from "../../model/modelType"
import { addToCarts } from "../../service/cartService/addCart.service"
import { removeFromCarts } from "../../service/cartService/delCart.service"

//state khởi tạo carts
let initCarts : StateCartType = {
    loading:false,
    data:[],
    error:null,
}
//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
 const cartsReducer = createSlice({
    name:'carts',
    initialState:initCarts,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCarts.pending,(state,action)=>{
            // trạng thái chờ lấy dữ liệu
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCarts.fulfilled,(state,action)=>{
            //trạng thái lấy dữ liệu thành công
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCarts.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addToCarts.fulfilled,(state,action)=>{
            //thêm mới
            state.data = [...state.data,action.payload]
        })
        .addCase(removeFromCarts.fulfilled,(state,action)=>{
            //xóa khỏi carts
            state.data = action.payload;
        })
    }
})

//xuất
export default cartsReducer.reducer;