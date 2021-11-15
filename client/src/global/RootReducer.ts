import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthAPI } from "./AuthAPI";
import { TodoAPI } from "./TodoAPI";
import { AuthReducer } from "./AuthSlice";

export const RootReducer = configureStore({
    reducer: {
        auth: AuthReducer,
        [AuthAPI.reducerPath]: AuthAPI.reducer,
        [TodoAPI.reducerPath]: TodoAPI.reducer,
    },
    middleware: (gDM) => gDM()   // gDM = getDefaultMiddleware
    .concat(AuthAPI.middleware)
    .concat(TodoAPI.middleware),
});

setupListeners(RootReducer.dispatch);
export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;




