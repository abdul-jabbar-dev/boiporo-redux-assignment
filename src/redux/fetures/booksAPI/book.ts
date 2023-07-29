import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookAPI",
  tagTypes: ["wishlist"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
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
    getAllBooks: builder.query({
      query: () => "/book",
      providesTags: ["wishlist"],
    }),
    getABook: builder.query({
      query: (id) => "/book/" + id,
      providesTags: ["wishlist"],
    }),
    addWishlist: builder.mutation({
      query({ bookId }) {
        return {
          url: `book/wishlist/` + bookId,
          method: "PATCH",
        };
      },
      invalidatesTags: ["wishlist"],
    }),
    removeWishlist: builder.mutation({
      query({ bookId }) {
        return {
          url: `book/wishlist/` + bookId,
          method: "DELETE",
        };
      },
      invalidatesTags: ["wishlist"],
    }),
  }),
});
export const {
  useGetAllBooksQuery,
  useGetABookQuery,
  useAddWishlistMutation,
  useRemoveWishlistMutation,
  useLoginUserMutation,
  useCreateUserMutation
} = bookApi;
export default bookApi;
