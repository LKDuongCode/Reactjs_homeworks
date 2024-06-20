import {combineReducers, createStore} from 'redux'
import productsReducer from './reducers/productsReducer';
// combine reducers if you have many reducer
let rootReducers = combineReducers({
    //reducer are there.
    products:productsReducer,

})

let store = createStore(rootReducers);

//export
export default store;