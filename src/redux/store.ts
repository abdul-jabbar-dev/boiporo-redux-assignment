import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./fetures/booksAPI/book"; 

const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([bookApi.middleware]),
});
export default store;
