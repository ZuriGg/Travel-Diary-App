import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>

        <Link to="users/login">Login</Link>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
