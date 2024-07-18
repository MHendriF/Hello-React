import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Index";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../layouts/RootLayout";
import BlogPage from "../pages/blogs/Index";
import DetailBlogPage from "../pages/blogs/_id";

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
      },
      {
        path: "/blog/:id",
        element: <DetailBlogPage />,
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
