import { createStore } from "redux";
import { combineReducers } from "redux";
import renderReducer from "./reducers/renderReducer";

let rootReducers = combineReducers({
    renderReducer:renderReducer,
});

let store = createStore(rootReducers);

export default store;