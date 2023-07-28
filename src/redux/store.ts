import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./fetures/booksAPI/book";

const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
});
export default store;
