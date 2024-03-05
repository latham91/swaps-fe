import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserRound } from "lucide-react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link className="brand-logo" to="/">
            Swaps
          </Link>
          <div className="nav-links-left">
            <Link to="/">Home</Link>
            <Link to="/about">Account</Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-links-right">
            {loggedIn ? (
              <>
                <Link to="/account">
                  <UserRound />
                </Link>
                <button>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link className="login-link" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
