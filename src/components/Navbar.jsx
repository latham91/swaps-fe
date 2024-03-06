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
                <Link className="sign-up-link" to="/signup">
                  Sign Up
                </Link>
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
