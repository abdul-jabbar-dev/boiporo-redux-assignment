import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../pages/home/Layout";
import Login from "../pages/auth/Login";
import BookDetails from "../pages/book/BookDetails";
import Registration from "../pages/auth/Registration";
import EditeBook from "../pages/book/EditeBook";
import Wishlist from "../pages/Wishlist";
import Reading from "../pages/Reading";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> },
    { path: "books/:id", element: <BookDetails /> },
    { path: "editebooks/:id", element: <EditeBook /> },
    { path: "wishlist", element: <Wishlist /> },
    { path: "reading", element: <Reading /> }
    ],
  },

  { path: "login", element: <Login /> },
  { path: "registration", element: <Registration /> },
]);
export default customRoutes;
