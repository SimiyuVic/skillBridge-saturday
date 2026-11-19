import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "./backendRoute.js";
import authReducer from "./auth.js";

const store = configureStore({
    reducer: {
        prod: prodReducer,
        auth: authReducer,
    }
});

export default store;