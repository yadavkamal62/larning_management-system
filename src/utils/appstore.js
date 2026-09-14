import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice"

const appStore =configureStore({
    reducer:{}
})
export default appStore;