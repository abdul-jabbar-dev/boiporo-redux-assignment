import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookAPI",
  tagTypes: ["wishlist", "user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query({ email, password }) {
        return {
          url: `user/login`,
          method: "POST",
          body: { email, password },
        };
      },
    }),
    createUser: builder.mutation({
      query(data) {
        return {
          url: `user/registration`,
          method: "POST",
          body: data,
        };
      },
    }),
    getUser: builder.query({
      query: (token) => ({
        url: "user/",
        headers: token,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getAllBooks: builder.query({
      query: () => ({ url: "/book" }),
      providesTags: ["wishlist", "user"],
    }),
    getABook: builder.query({
      query: (id) => "/book/" + id,
      providesTags: ["wishlist", "user"],
    }),
    addWishlist: builder.mutation({
      query({ bookId }) {
        console.log("bookId", bookId);
        return {
          url: `book/wishlist/` + bookId,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "PATCH",
        };
      },
      invalidatesTags: ["wishlist", "user"],
    }),
    addReading: builder.mutation({
      query({ bookId }) {
        console.log("bookId", bookId);
        return {
          url: `book/add_reading/` + bookId,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "PATCH",
        };
      },
      invalidatesTags: ["wishlist", "user"],
    }),
    removeWishlist: builder.mutation({
      query({ bookId }) {
        return {
          url: `book/wishlist/` + bookId,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "DELETE",
        };
      },
      invalidatesTags: ["wishlist", "user"],
    }),
    getBookInforFromUser: builder.query({
      query() {
        return {
          url: `book/bookInfo/`,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "Get",
        };
      },
      providesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetABookQuery,
  useAddWishlistMutation,
  useRemoveWishlistMutation,
  useLoginUserMutation,
  useCreateUserMutation,
  useGetUserQuery,
  useAddReadingMutation,
  useGetBookInforFromUserQuery,
} = bookApi;
export default bookApi;
