import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/adminSlice";
import loadingSlice from "./features/loadingSlice";
import userSlice from "./features/userSlice";

export default configureStore({
    reducer: {
        loading:loadingSlice,
        user:userSlice,
        admin:adminSlice
    }
})