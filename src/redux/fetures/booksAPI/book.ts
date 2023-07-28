import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/book",
    }),
    getABook: builder.query({
      query: (id) => "/book/" + id,
    }),
    addWishlist: builder.mutation({
      query({ bookId, userId }) {
        return {
          url: `book/add_wishlist/` + bookId,
          method: "POST",
          body: { userId },
        };
      },
    }),
  }),
});
export const { useGetAllBooksQuery, useGetABookQuery, useAddWishlistMutation } =
  bookApi;
export default bookApi;
