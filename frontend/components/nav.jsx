import "../styles/nav.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        {/* React Router here? */}
        <Link to="/">Home</Link>
        <Link to="post">CMS Login</Link>
      </nav>
      <Outlet />
    </>
  );
};
