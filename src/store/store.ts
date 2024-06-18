import { createStore } from "redux";
import { combineReducers } from "redux";
import reducerUsers from "./reducers/profileReducer";
import reducerUser2 from "./reducers/listUserReducer";
import productlistReducer from "./reducers/productlistReducer";
import countReducer from "./reducers/counterReducer";
import generateRandomReducer from "./reducers/generateRandomReducer";
import companyStateReducer from "./reducers/changeState";
import changeBackgroundReducer from "./reducers/changeBackground";
import signupReducer from "./reducers/signupReducer";
let rootReducer = combineReducers({
    reducerUsers:reducerUsers,
    reducerUser2:reducerUser2,
    productlistReducer:productlistReducer,
    countReducer:countReducer,
    generateRandomReducer:generateRandomReducer,
    companyStateReducer:companyStateReducer,
    changeBackgroundReducer:changeBackgroundReducer,
    signupReducer:signupReducer,
})
let store = createStore(rootReducer)
export default store;