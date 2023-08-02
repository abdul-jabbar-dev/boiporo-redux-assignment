import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookAPI",
  tagTypes: ["wishlist", "user", "reading"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
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
          url: `book/reading/` + bookId,
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
    removeReading: builder.mutation({
      query({ bookId }) {
        console.log(bookId, localStorage.getItem("token"));
        return {
          url: `book/reading/` + bookId,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "DELETE",
        };
      },
      invalidatesTags: ["reading", "user"],
    }),
    getBookInforFromUser: builder.query({
      query() {
        return {
          url: `book/bookInfo/`,
          headers: { token: localStorage.getItem("token") || undefined },
          method: "Get",
        };
      },
      providesTags: ["wishlist", "reading"],
    }),
    //user
    loginUser: builder.mutation({
      query({ email, password }) {
        return {
          url: `user/login`,
          method: "POST",
          body: { email, password },
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        localStorage.removeItem("token");
        return {
          url: `user/logout`,
          method: "PATCH",
          headers: { token: localStorage.getItem("token") || undefined },
        };
      },
      invalidatesTags: ["user"],
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
      providesTags: ["user", "wishlist"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetABookQuery,
  useAddWishlistMutation,
  useRemoveWishlistMutation,
  useAddReadingMutation,
  useRemoveReadingMutation,
  useGetBookInforFromUserQuery,
  useLoginUserMutation,
  useCreateUserMutation,
  useGetUserQuery,
  useLogoutUserMutation,
} = bookApi;
export default bookApi;
