import { createStore } from "redux";
import { combineReducers } from "redux";
import reducerUsers from "./reducers/profileReducer";
import reducerUser2 from "./reducers/listUserReducer";
import productlistReducer from "./reducers/productlistReducer";
import countReducer from "./reducers/counterReducer";
let rootReducer = combineReducers({
    reducerUsers:reducerUsers,
    reducerUser2:reducerUser2,
    productlistReducer:productlistReducer,
    countReducer:countReducer,
})
let store = createStore(rootReducer)
export default store;