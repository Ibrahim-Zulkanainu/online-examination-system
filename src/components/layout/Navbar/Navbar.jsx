import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          🎓 ExamPortal
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-buttons">

          <Link to="/student-login">
            <button className="btn-outline">
              Student Login
            </button>
          </Link>

          <Link to="/admin-login">
            <button className="btn-primary">
              Admin Login
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;