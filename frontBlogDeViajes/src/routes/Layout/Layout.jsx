import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../UserContext.jsx";
import "./Layout.css";

function Layout() {
  const [user] = useUser(); //importamos contexto
  return (
    <>
      <header id="header">
        <Link to="/">Home</Link>
        {user ? (
          <span>Bienvenido, Mamá del Güevo </span>
        ) : (
          <Link to="users/login">Login</Link>
        )}
        {/* <Link to="users/register">Register</Link>
        <Link to="users/login">Login</Link> */}
        {/*<Link to="users/logout">Logout</Link>*/}
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
