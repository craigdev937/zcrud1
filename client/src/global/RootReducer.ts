import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthAPI } from "./AuthAPI";

export const RootReducer = configureStore({
    reducer: {
        [AuthAPI.reducerPath]: AuthAPI.reducer,
    },
    // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(AuthAPI.middleware),
});

setupListeners(RootReducer.dispatch);



