import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |
      <Outlet />
    </>
  );
}
