import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Index";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../layouts/RootLayout";
import BlogPage from "../pages/blogs/Index";
import DetailBlogPage from "../pages/blogs/_id";
import { postById, posts } from "../apis/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <DetailBlogPage />,
        loader: postById,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
