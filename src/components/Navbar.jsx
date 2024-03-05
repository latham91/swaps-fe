import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div className="brand-logo">Swaps</div>
          <div className="nav-links-left">
            <Link to="/">Home</Link>
            <Link to="/about">Account</Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-links-right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
