import { ITodo } from "../models/ITodo";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/todos/";
export const TodoAPI = createApi({
    reducerPath: "TodoAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        fetchAll: builder.query<ITodo[], void>({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ _id }) => 
                ({ type: "Todos" as const, id: _id })),
                { type: "Todos", id: "LIST" },
            ] : [{ type: "Todos", id: "LIST" }],
        }),
        getOne: builder.query<ITodo, string>({
            query: (_id) => `${_id}`,
            providesTags: (result, error, _id) => 
                [{ type: "Todos", id: _id }],
        }),
        add: builder.mutation<ITodo, ITodo>({
            query: (todo) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: todo,
                }
            },
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
        edit: builder.mutation<ITodo, ITodo>({
            query: ({ _id, ...todo }) => ({
                url: `/${_id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
        delete: builder.mutation({
            query: (_id) => ({
                url: `${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Todos", id: "LIST" }],
        }),
    }),
});





