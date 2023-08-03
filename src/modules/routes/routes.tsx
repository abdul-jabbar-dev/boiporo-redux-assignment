import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../pages/home/Layout";
import Login from "../pages/auth/Login";
import BookDetails from "../pages/book/BookDetails";
import Registration from "../pages/auth/Registration";
import EditeBook from "../pages/book/EditeBook";
import Wishlist from "../pages/Wishlist";
import Reading from "../pages/Reading";
import AddBook from "../pages/book/AddBook";
import MyBooks from "../pages/book/MyBooks";
import PrivetRoute from "./PrivetRoute";


const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> },
    { path: "books/:id", element: <BookDetails /> },
    { path: "editebooks/:id", element: <EditeBook /> },
    { path: "wishlist", element: <PrivetRoute><Wishlist ></Wishlist></PrivetRoute> },
    { path: "reading", element: <PrivetRoute><Reading /></PrivetRoute> },
    { path: "addbook", element: <PrivetRoute><AddBook /></PrivetRoute> },
    { path: "mybooks", element: <PrivetRoute><MyBooks /></PrivetRoute> },

    ],
  },

  { path: "login", element: <Login /> },
  { path: "registration", element: <Registration /> },
]);
export default customRoutes;
