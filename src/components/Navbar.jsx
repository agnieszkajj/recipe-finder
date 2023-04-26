import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          The<span>Meal</span>DB
        </Link>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
