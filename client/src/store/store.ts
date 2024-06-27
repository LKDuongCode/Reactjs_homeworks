import { configureStore } from "@reduxjs/toolkit";
import  cartsReducer  from "./reducers/cartReducer";
import sellsReducer from "./reducers/sellReducer";
export let store = configureStore({
    reducer:{
        carts:cartsReducer,
        sells:sellsReducer,
    }
})