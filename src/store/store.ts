import {combineReducers, createStore} from 'redux'
import productsReducer from './reducers/productsReducer';
import {cartsReducer} from './reducers/cartsReducer';
// combine reducers if you have many reducer
let rootReducers = combineReducers({
    //reducer are there.
    products:productsReducer,
    carts:cartsReducer,
})

let store = createStore(rootReducers);

//export
export default store;