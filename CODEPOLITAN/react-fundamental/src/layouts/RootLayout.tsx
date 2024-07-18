import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

export default function RootLayout() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{ marginRight: "5px" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{ marginRight: "5px" }}
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{ marginRight: "5px" }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{ marginRight: "5px" }}
      >
        Contact
      </NavLink>
      <Outlet />
    </>
  );
}
