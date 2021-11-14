import { IUser } from "../models/IUser";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/auth/";
export const AuthAPI = createApi({
    reducerPath: "AuthAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        reg: builder.mutation<IUser, IUser>({
            query: (data) => {
                return {
                    url: `register`,
                    method: "POST",
                    body: data,
                }
            },
            invalidatesTags: [{ type: "Auth", id: "LIST"}],
        }),
        login: builder.mutation<IUser, IUser>({
            query: (data) => ({
                url: `login`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Auth", id: "LIST"}],
        }),
        private: builder.mutation<IUser, IUser>({
            query: (token) => ({
                url: `private`,
                method: "POST",
                headers: {"Authorization": `Bearer ${token}`},
            }),
            invalidatesTags: [{ type: "Auth", id: "LIST"}],
        })
    }),
});





