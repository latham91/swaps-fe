import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, handleLogout } = useContext(AuthContext);
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
            {user ? (
              <>
                <Link to="/account">
                  <UserRound />
                </Link>
                <Link className="secondary-btn" to="/create">
                  Create
                </Link>
                <button onClick={handleLogout} className="primary-btn">
                  Logout
                </button>
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
