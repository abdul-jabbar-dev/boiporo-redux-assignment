import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/book",
    }),
  }),
});
export const { useGetAllBooksQuery } = bookApi;
export default bookApi;
