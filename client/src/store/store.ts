import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './reducers/mainTaskReducer'
export let store = configureStore({
    reducer:{
        tasksList:taskReducer,
    }
})