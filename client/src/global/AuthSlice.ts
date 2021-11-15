import { IUserState } from "../models/IUser";
import { createSlice, 
    PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
    user: {},
    status: "",
    token: ""
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveToken(state, action: PayloadAction<string>) {
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
        },
        removeToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        saveUser(state, action: PayloadAction<IUserState>) {
            state.user = action.payload.user;
        },
        removeUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
        },
    },
});

export const { 
    saveToken, saveUser, removeUser, 
    removeToken } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;



