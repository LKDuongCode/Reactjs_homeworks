import {combineReducers, createStore} from 'redux'
// combine reducers if you have many reducer
let rootReducers = combineReducers({
    //reducer are there.

})

let store = createStore(rootReducers);

//export
export default store;