import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countsReducer";
import statusThemeReducer from "./reducers/statusTheme";
import changeDisplayModeReducer from "./reducers/changeDisplayModeReducer";
import randomNumReducer from "./reducers/randomNumReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import changeLanguageReducer from "./reducers/changeLanguageReducer";
import protectedUserReducer from './reducers/protectedUser'
import loginUserReducer from './reducers/loginReducer'
export let store = configureStore({
    reducer:{
        count:countReducer,
        nums:randomNumReducer,
        theme:statusThemeReducer,
        displayMode:changeDisplayModeReducer,
        sideBar:sidebarReducer,
        languages:changeLanguageReducer,
        protectedUser:protectedUserReducer,
        loginUsers:loginUserReducer,
    }
})




