import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"], // cache name
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        console.log("priority in api=>", priority);
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          // url: `/todos?priority=${priority}`,
          url: `/todos`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/todo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    updateTodo: builder.mutation({
      query: (option) => {
        console.log("update todo option inside api=>", option);
        return {
          url: `/todo/${option._id}`,
          method: "PUT",
          body: option.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        console.log("delete todo option inside api=>", id);
        return {
          url: `/todo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
